export default {
  transform: {
    '^.+\\.js$': 'babel-jest', 
  },
  testEnvironment: 'node', 
  experimentalModules: true,
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1', 
  },
};