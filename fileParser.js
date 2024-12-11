export const parseFile = (filepath) => {
  const absolutePath = path.resolve(filepath);

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`File not found: ${absolutePath}`);
  }

  const content = fs.readFileSync(absolutePath, 'utf8');
  const ext = path.extname(filepath);

  if (ext === '.json') {
    return JSON.parse(content);
  }

  throw new Error(`Unsupported file format: ${ext}`);
}