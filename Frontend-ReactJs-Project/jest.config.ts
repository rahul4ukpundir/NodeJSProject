import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  roots: [
          "<rootDir>/src"
        ],
   transform :{
       "\\.[jt]sx?$": "jest"
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
    testRegex :"(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    moduleFileExtensions: ['ts', 'tsx','js', 'jsx', 'json'],
    testEnvironment :"jsdom",
    collectCoverage:true

};
export default config;

