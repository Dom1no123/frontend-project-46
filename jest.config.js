export default {
  transform: {
    '^.+\\.js$': 'babel-jest', 
  },
  extensionsToTreatAsEsm: ['.js'], 
  testEnvironment: 'node', 
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', 
  },
};