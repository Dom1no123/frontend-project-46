#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';


const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath);
  try {
    const content = fs.readFileSync(absolutePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    throw new Error(`Failed to read or parse file: ${filepath}. ${error.message}`);
  }
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

  return `{\n${lines.join('\n')}\n}`.trim().replace(/\r\n/g, '\n');
};

export default genDiff