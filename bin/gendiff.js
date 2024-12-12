#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';
import { parseFile } from '../fileParser.js';

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

program.parse();