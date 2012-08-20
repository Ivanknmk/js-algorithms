var LinkedList = require("../lib/linkedList.js"); 

describe('When adding one element', function () {
	var list;
	var testValue = "test_string"

	beforeEach(function() {		
		list = new LinkedList();
		list.add(testValue); 
		console.log(list);
	});

	afterEach(function() {
		list = null;
	});

	it('the lists length should increase by 1', function () { 
		expect(list.length).toBe(1);
	});

	it('the start element should contain the added value.', function () {   
		expect(list.start.data).toBe(testValue);
	});

	it('the end element should contain the added value.', function () { 
		expect(list.end.data).toBe(testValue);
	});

	it('the start next pointer should be null.', function () {  
		expect(list.start.next).toBe(null);
	});

	it('the end next pointer should be null.', function () { 
		expect(list.end.next).toBe(null);
	});
});

describe('When adding two elements', function () {
	var list;
	var testValue1 = "test_string"
	var testValue2 = "test_string"

	beforeEach(function() {		
		list = new LinkedList();
		list.add(testValue1); 
		list.add(testValue2); 
		console.log(list);
	});

	afterEach(function() {
		list = null;
	});

	it('the lists length should be 2', function () { 
		expect(list.length).toBe(2);
	});

	it('the start element should contain the 1st value.', function () {   
		expect(list.start.data).toBe(testValue1);
	});

	it('the end element should contain the 2nd value.', function () { 
		expect(list.end.data).toBe(testValue2);
	});

	it('the start next pointer should be point to the 2nd value node.', function () {  
	  console.log(list.start.next);
		expect(list.start.next.data).toBe(testValue2);
	});

	it('the end next pointer should be null.', function () { 
		expect(list.end.next).toBe(null);
	});
});