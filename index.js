var visual_aid_me = require("./visual-aid.js")

module.exports = function(robot) {
    return robot.hear(/(.+)/i, function(msg) {
        if (robot.name == msg.message.user.name) return;
        var image = visual_aid_me(msg.match[1]);
        if(!!image) {
            msg.send(image);
        }
    });
}
