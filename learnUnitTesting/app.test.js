describe("calculate taxes tests", function(){
	it("should calculate low-bracket", function(){
		expect(calculateTaxes(10000)).toEqual(1500);
		expect(calculateTaxes(20000)).toEqual(3000);
	});
	
	if("should calculate high-bracket", function(){
		expect(calculateTaxes(50000)).toEqual(12500);
		expect(calculateTaxes(80000)).toEqual(20000);
	});
	
	if("should throw an error for unexpected input", function(){
		expect(() => calculateTaxes("asdjfn")).toThrowError();
		expect(() => calculateTaxes([])).toThrowError();
		expect(() => calculateTaxes(true)).toThrowError();
		
	});
});


describe("remove dupes tests", function(){
	it("should remove duplicates from an array", function(){
		expect(removeDupes([1,2,3])).toEqual([1,2,3]);
	   expect(removeDupes([1,2,3])).toBeInstanceOf(Array);
   });
   
   it("should remove duplicates from a string", function(){
	   expect(removeDupes("hello")).toEqual("helo");
	   expect(removeDupes("hello")).toBeInstanceOf(String);
   });
   

});



describe("remove tests", function(){
	it("should remove the specified value from an array", function(){
		expect(remove([1,2,3,4], 4)).not.toContain(4);
	});
});



