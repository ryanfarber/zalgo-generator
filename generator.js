// generator.js

var { zalgo_up, zalgo_down, zalgo_mid } = require("./characters.js")
			
function Zalgo(settings) {
	// var p = document.getElementById(id);
	this.generate = function(text) {

		var amountMap = new Map([
			[1, 1],
			[2, 2],
			[3, 3],
			["mini", 1],
			["small", 1],
			["min", 1],
			["minimum", 1],
			["normal", 2],
			["medium", 2],
			["default", 2],
			["norm", 2],
			["max", 3],
			["maxi", 3],
			["maximum", 3],
			["large", 3]
		])
		var amount = amountMap.get(settings.amount)

		var txt = text;
		var newtxt = '';

		for(var i=0; i<txt.length; i++) {
			if(is_zalgo_char(txt.substr(i, 1)))
				continue;
			
			var num_up;
			var num_mid;
			var num_down;
			
			//add the normal character
			newtxt += txt.substr(i, 1);

			//options
			if(amount == 1) {
				num_up = rand(8);
				num_mid = rand(2);
				num_down = rand(8);
			}
			else if(amount == 2) {
				num_up = rand(16) / 2 + 1;
				num_mid = rand(6) / 2;
				num_down = rand(16) / 2 + 1;
			}
			else if(amount == 3) {
				num_up = rand(64) / 4 + 3;
				num_mid = rand(16) / 4 + 1;
				num_down = rand(64) / 4 + 3;
			}
			
			
			if(settings.up)
				for(var j=0; j<num_up; j++)
					newtxt += rand_zalgo(zalgo_up);
				if(settings.middle)
					for(var j=0; j<num_mid; j++)
						newtxt += rand_zalgo(zalgo_mid);
					if(settings.down)
						for(var j=0; j<num_down; j++)
							newtxt += rand_zalgo(zalgo_down);
		}; // end for

		return newtxt;
	};
}; // end Zalgo

// other functions

function rand(max) {
	return Math.floor(Math.random() * max);
}

//gets a random char from a zalgo char table
function rand_zalgo(array) {
	var ind = Math.floor(Math.random() * array.length);
	return array[ind];
}

// utils funcs
//---------------------------------------------------

//hide show element
function toggle(id) {
	if(document.getElementById(id).style.display == "none")
		document.getElementById(id).style.display = "block";
	else
		document.getElementById(id).style.display = "none";
}

//lookup char to know if its a zalgo char or not
function is_zalgo_char(c) {
	var i;
	for(i=0; i<zalgo_up.length; i++)
		if(c == zalgo_up[i])
			return true;
		for(i=0; i<zalgo_down.length; i++)
			if(c == zalgo_down[i])
				return true;
			for(i=0; i<zalgo_mid.length; i++)
				if(c == zalgo_mid[i])
					return true;
				return false;
}

function draw_zalgo_table(elid) {
	var container = document.getElementById(elid);
	var html = '';

	html += '<b>Chars going up:</b><br />\n';
	html += '<table class="zalgo_ref_table">\n';
	html += '<tr>\n';
	for(var i=0; i<zalgo_up.length; i++)
	{
		if(!(i % 10))
			html += '</tr><tr>';
		html += '<td class="zalgo_td">' + zalgo_up[i] + '</td>\n';
	}
	html += '</tr>\n';
	html += '</table>\n';

	html += '<br /><b>Chars staying in the middle:</b><br />\n';
	html += '<table class="zalgo_ref_table">\n';
	html += '<tr>\n';
	for(var i=0; i<zalgo_mid.length; i++)
	{
		if(!(i % 10))
			html += '</tr><tr>';
		html += '<td class="zalgo_td">' + zalgo_mid[i] + '</td>\n';
	}
	html += '</tr>\n';
	html += '</table>\n';

	html += '<br /><b>Chars going down:</b><br />\n';
	html += '<table class="zalgo_ref_table">\n';
	html += '<tr>\n';
	for(var i=0; i<zalgo_down.length; i++)
	{
		if(!(i % 10))
			html += '</tr><tr>';
		html += '<td class="zalgo_td">' + zalgo_down[i] + '</td>\n';
	}
	html += '</tr>\n';
	html += '</table>\n';

	container.innerHTML = html;
}

module.exports = Zalgo