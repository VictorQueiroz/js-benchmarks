const Benchmark = require('benchmark');

class NewFunctionClass {
	constructor() {
		this.method1 = function(){

		};
	}
}

class BoundClass {
	constructor() {
		this.method1 = this.method1.bind(this);
	}

	method1(){

	}
}

const suite = new Benchmark.Suite();

suite.add('new function', function(){
	new NewFunctionClass();
})
.add('bind method', function(){
	new BoundClass();
})
.on('cycle', function(event) {
	console.log(String(event.target));
})
.on('complete', function() {
	console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run({async: true});
