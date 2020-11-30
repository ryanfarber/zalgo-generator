
var Zalgo = require("./generator.js");

var zalgo = new Zalgo({
	amount: "mini",
	up: true,
	middle: true,
	down: true,
})



console.log(zalgo.generate("hello"))