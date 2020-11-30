# zalgo-generator
a revised version of `Zalgo Text Generator` by Tchouky

[Original Source](http://www.eeemo.net)



```javascript
var Zalgo = require("zalgo-generator");

var zalgo = new Zalgo({
	amount: "small", // 1, 2, 3 or small, medium, large, etc 
	up: true,
	middle: true,
	down: true,
})

console.log(zalgo.generate("hello world"))


// h̵̟̱̟̘͚̺̪ͤͩé̹̠̭͆͟l̩̰̬̰̒̃̎͘l̟̱̙̅ǫ̜̩ͫͦͭ̑ w̶̿ͫ̉̒͒o̴̦̙̝̤r̩͙̩̙̗͋̅̈̈́ͣͦͅl͓̪̘̱̣͓̂ͪd̓ͦ̋͐̓̏ͥ͏̠̻͔



```