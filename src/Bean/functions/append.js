const Bean = require('../index.js');
const Soup = require('@stews/soup');


function BeanAppend(index, set_to=null) {
	var stuff = new Soup(Array);
	var stuff2 = new Soup(Array);

	if (this.ints[0] instanceof Array) {
		this.ints[0].forEach( (v, i) => {
	        if (i == index) stuff.push(set_to);
	        stuff.push(v);
		});
		this.ints[1].forEach( (v, i) => {
	        if (i+(this.ints[0].length) == index) stuff2.push(set_to);
	        stuff2.push(v);
		});
		
		this.content = parseFloat(`${stuff.join("")}.${stuff2.join("")}`);
	}
	else {
		this.ints.forEach( (v, i) => {
	        if (i == index) stuff.push(set_to);
	        stuff.push(v);
		});
		
		this.content = parseFloat(stuff.join(""));
	}

    return this;
}


Bean.newF("append", BeanAppend);
Bean.newF("insert", BeanAppend);
Bean.newF("push_at", BeanAppend);
Bean.newF("push_to", BeanAppend);
