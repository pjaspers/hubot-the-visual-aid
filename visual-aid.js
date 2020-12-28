var _ = require("lodash");

const loadJSON = () => {
  const glob = require("glob");
  let data = [];
  const files = glob.sync("data/*.json");
  files.forEach((file) => {
    const json = require("./" + file);
    data.push(json);
  });
  return data;
}

const available = () => {
  const all = loadJSON();
  return all.filter(e => e.urls.length > 0);
}

// Goes over all the regexes defined in `data` and returns a random url defined in the object
// whose regex matches. Otherwise returns nothing.
module.exports = {
  available: available,
  availableExamples: () => ( available().map(e => e.example)),
  regexToRuleThemAll: () => {
    const allRegexes = available().map(e => e.regexes).flat(1);
    return new RegExp(`(${allRegexes.join("|")})`, "i");
  },
  findUrlFor: (input) => {
    const match = _.find(available(), thing => (
      thing.regexes.some(regex => new RegExp(regex, "i").test(input))
    ));
    if (match) {
      const url = _.sample(match.urls);
      return url;
    }
  }
}
