


// return objects at the edges with minimum and maximum values
// of the 'field'
function minMax(arry, field) {
	function arrayMin(arr) {
		return arr.reduce(function(p, v) {
			if ( typeof[v] === "undefined") { return p; }
			else {      return (p[field].getTime() < v[field].getTime() ? p : v);}
		});
	}

	function arrayMax(arr) {
		return arr.reduce(function(p, v) {
			if ( typeof[v] === "undefined") { return p; }
			else {  return (p[field].getTime() > v[field].getTime() ? p : v);}
		});
	}

	return ({
		"min": arrayMin(arry),
		"max": arrayMax(arry)
	});
}

var arrayMaxTestData = [{
	"title": "fifth",
	"startTime": new Date("2017-05-01")
},{
	"title": "first",
	"startTime": new Date("2017-01-01")
}, {
	"title": "second",
	"startTime": new Date("2017-02-01")
}, {
	"title": "sixth",
	"startTime": new Date("2017-06-01")
},  {
	"title": "seventh",
	"startTime": new Date("2017-07-01")
}, {
	"title": "fourth",
	"startTime": new Date("2017-04-01")
}, {
	"title": "third",
	"startTime": new Date("2017-03-01")
}];

var should = require('chai').should() //actually call the function


it ("test data should be of known size", function(){
	arrayMaxTestData.should.have.lengthOf(7);
})	;
var mm = minMax(arrayMaxTestData, "startTime")
it ("minMax return value should have 'min' and 'max' properties", function(){


	mm.should.have.property("min");
	mm.should.have.property("max");
});
it ("minMax output should have a title that is a string (in the test data)", function(){
	mm["min"]["title"].should.be.a("string");
});
it ("minMax output should be correct", function(){
	mm["min"]["title"].should.equal("first");
	mm["max"]["title"].should.equal("seventh");
});
