


var minMaxTestData = [{
	"title": "fifth",
	"startTime": new Date("2017-05-01"), 
	"altSort": 5,
	"inverseSort": 600
},{
	"title": "first",
	"startTime": new Date("2017-01-01"), 
	"altSort": 1,
	"inverseSort": 1000
}, {
	"title": "second",
	"startTime": new Date("2017-02-01"), 
	"altSort": 2,
	"inverseSort": 900
}, {
	"title": "sixth",
	"startTime": new Date("2017-06-01"), 
	"altSort": 6,
	"inverseSort": 500
},  {
	"title": "seventh",
	"startTime": new Date("2017-07-01"), 
	"altSort": 7,
	"inverseSort": 400
}, {
	"title": "fourth",
	"startTime": new Date("2017-04-01"), 
	"altSort": 4,
	"inverseSort": 700
}, {
	"title": "third",
	"startTime": new Date("2017-03-01"), 
	"altSort": 3,
	"inverseSort": 800
}];

var minMax = require( '../src/minMax');
var should = require('chai').should() //actually call the function


it ("test data should be of known size", function(){
	minMaxTestData.should.have.lengthOf(7);
})	;
var mm = minMax(minMaxTestData, "startTime", true);
var mm2 = minMax(minMaxTestData, "altSort");
var mm3 = minMax(minMaxTestData, "inverseSort");
it ("minMax return value should have 'min' and 'max' properties", function(){
	mm.should.have.property("min");
	mm.should.have.property("max");
	mm2.should.have.property("min");
	mm2.should.have.property("max");
	mm3.should.have.property("min");
	mm3.should.have.property("max");

});
it ("all minMax output should have a title that is a string (in the test data)", function(){
	mm["min"]["title"].should.be.a("string");
	mm2["min"]["title"].should.be.a("string");
	mm3["min"]["title"].should.be.a("string");
});
it ("minMax output should deal with dates", function(){
	mm["min"]["title"].should.equal("first");
	mm["max"]["title"].should.equal("seventh");

});


it ("minMax output should deal with numbers", function(){
	mm2["min"]["title"].should.equal("first");
	mm2["max"]["title"].should.equal("seventh");
});

it ("minMax output should deal with numbers (inverse)", function(){
	mm3["max"]["title"].should.equal("first");
	mm3["min"]["title"].should.equal("seventh");
});


