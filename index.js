const { findUrlFor, available, availableExamples } = require("./visual-aid.js")

module.exports = function(robot) {
  return robot.hear(/(.+)/i, function(msg) {
    if (robot.name == msg.message.user.name) return;

    const image = findUrlFor(msg.match[1]);
    if(!!image) {
      msg.send(image);
    }
  });
}
