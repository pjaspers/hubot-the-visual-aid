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


// Goes over all the regexes defined in `data` and returns a random url defined in the object
// whose regex matches. Otherwise returns nothing.
module.exports = function(input) {
  const match = _.find(loadJSON(), thing => (
    thing.regexes.some(regex => new RegExp(regex, "i").test(input))
  ));
  if (match) {
    const url = _.sample(match.urls);
    return url;
  }
}
