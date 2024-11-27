#!/usr/bin/env node

import { Command } from 'commander';
import { parseFile } from './fileParser.js';

const program = new Command();

const compareData = (data1, data2) => {
    const keys1 = Object.keys(data1);
    const keys2 = Object.keys(data2);
    const allKeys = Array.from(new Set([...keys1, ...keys2]));
  
    return allKeys.map((key) => {
      if (!keys1.includes(key)) {
        return { key, type: 'added', value: data2[key] };
      }
      if (!keys2.includes(key)) {
        return { key, type: 'removed', value: data1[key] };
      }
      if (data1[key] !== data2[key]) {
        return { key, type: 'changed', oldValue: data1[key], newValue: data2[key] };
      }
      return { key, type: 'unchanged', value: data1[key] };
    });
  };
  
  program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .helpOption('-h, --help', 'output usage information')
    .argument('<filepath1>', 'path to the first file')
    .argument('<filepath2>', 'path to the second file')
    .option('-f, --format [type]', 'output format', 'stylish')
    .action((filepath1, filepath2, options) => {
      try {
        const data1 = parseFile(filepath1);
        const data2 = parseFile(filepath2);
  
        const differences = compareData(data1, data2);
        console.log('Differences:');
        differences.forEach((diff) => {
          const { key, type, value, oldValue, newValue } = diff;
          switch (type) {
            case 'added':
              console.log(`  + ${key}: ${value}`);
              break;
            case 'removed':
              console.log(`  - ${key}: ${value}`);
              break;
            case 'changed':
              console.log(`  ~ ${key}: ${oldValue} -> ${newValue}`);
              break;
            case 'unchanged':
              console.log(`    ${key}: ${value}`);
              break;
            default:
              break;
          }
        });
      } catch (error) {
        console.error('Error:', error.message);
      }
    });
  
  program.parse();