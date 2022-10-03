module.exports = {
  clearMocks: true,
  forceExit: true,
  verbose: true,
  rootDir: "./",
  roots: ["<rootDir>/test"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.js"],
  globalSetup: "<rootDir>/test/globalSetup.js",
  globalTeardown: "<rootDir>/test/globalTearDown.js",
  globals: {
    __USER__: {
      id: "633b500b79220e3ffeb4446a",
    },
  },
};
