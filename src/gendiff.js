#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const content = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(content);
};

const genDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const lines = keys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return [
        `  - ${key}: ${data1[key]}`,
        `  + ${key}: ${data2[key]}`,
      ].join('\n');
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${lines.join('\n')}\n}`;
};

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to the first file')
  .argument('<filepath2>', 'path to the second file')
  .action((filepath1, filepath2) => {
    try {
      const data1 = parseFile(filepath1);
      const data2 = parseFile(filepath2);
      const diff = genDiff(data1, data2);
      console.log(diff);
    } catch (error) {
      console.error('Error:', error.message);
    }
  });

// Условное выполнение CLI
if (import.meta.url === `file://${process.argv[1]}`) {
  program.parse();
}

export default genDiff;