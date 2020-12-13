var assert = require('assert');

describe('lint data files', () => {
  const glob = require("glob");
  let data = [];
  const files = glob.sync("data/*.json");
  files.forEach((file) => {
    it(`can load ${file}`, () => {
      require("../" + file)
    })
  });
});
