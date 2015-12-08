var _ = require("lodash");

var data = [
  { regexes: ["unexplainable"], urls: require("./data/unexplainable.json")},
  { regexes: ["interesting", "fascinating"], urls: require("./data/interesting.json")},
  { regexes: ["cue @?(lewis|bowling|bowlboy|delul)"], urls: require("./data/cue.json")["lewis"] },
  { regexes: ["cue @?(piet|junkiesxl)"], urls: require("./data/cue.json")["pjaspers"] },
  { regexes: ["cue @?(inferis|geknipt|dotter|dottom|a3|maaagd)"], urls: require("./data/cue.json")["inferis"] },
  { regexes: ["cue @?(jelle|verbeeckx|fousa|jaakske)"], urls: require("./data/cue.json")["fousa"] },
  { regexes: ["cue @?(bob|bab|bib|boob)"], urls: require("./data/cue.json")["reprazent"] },
  { regexes: ["cue @?(pcbob)"], urls: require("./data/cue.json")["pcbob"] },
  { regexes: ["cue @?(santabob|santa|christmas|kerstman)"], urls: require("./data/cue.json")["santabob"] },
  { regexes: ["cue @?(soffe|sophie|poeziemauw)"], urls: require("./data/cue.json")["soffe"] },
  { regexes: ["cue @?(atog|koen)"], urls: require("./data/cue.json")["atog"] },
  { regexes: ["cue @?(evert)"], urls: require("./data/cue.json")["evert"] },
  { regexes: ["cue @?(tomk|honcho)"], urls: require("./data/cue.json")["tomk"] },
  { regexes: ["cue @?(bram|bramon|chili|sombrero)"], urls: require("./data/cue.json")["bramon"] },
  { regexes: ["cue @?(koekoek)"], urls: require("./data/cue.json")["koekoek"] },
  { regexes: ["cue @?(tentoone|friends|team|jebus)"], urls: require("./data/cue.json")["10to1"] },
  { regexes: ["cue @?(toon)"], urls: require("./data/cue.json")["toon"] },
  { regexes: ["cue @?(jira|raf)"], urls: require("./data/cue.json")["raf"] },
  { regexes: ["cue @?(nate|nathan|hipster|nathiorix)"], urls: require("./data/cue.json")["nathan"] }
]

// Goes over all the regexes defined in `data` and returns a random url defined in the object
// whose regex matches. Otherwise returns nothing.
module.exports = function(input) {
  return _.sample(_.result(_.find(data, function(thing) {
                      return thing.regexes.some(function(regex) {
                               return new RegExp(regex, "i").test(input);
                             });
                    }), "urls"));
}
