#!/usr/bin/env node

import fs from 'fs';
import path from 'path';


export const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath);
  const content = fs.readFileSync(absolutePath, 'utf8');
  const ext = path.extname(filepath);

  if (ext === '.json') {
    return JSON.parse(content);
  }

  throw new Error(`Unsupported file format: ${ext}`);
};