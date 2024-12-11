import { fileURLToPath } from 'url';
import path from 'path';
import { readFileSync } from 'fs';
import genDiff from '../genDiff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFile = (filename) => {
  const filePath = getFixturePath(filename);
  console.log('Reading file:', filePath);
  return readFileSync(filePath, 'utf-8');
};

test('gendiff', () => {
  const file1Content = readFile('file1.json');
  const file2Content = readFile('file2.json');
  const expected = readFile('expected_output.txt').trim();

  const diff = genDiff(file1Content, file2Content);

  console.log('Expected Output:', expected);
  console.log('Received Output:', diff);

  expect(diff.trim()).toBe(expected);
});