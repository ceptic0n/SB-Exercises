
it('should calculate the monthly rate correctly', function () {
  // ...
});


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc

//all calculator tests will be encapsulated in here
describe("Tests for calculator.js", function(){

  //check if the monthlyrate will work
  it("should calculate the monthly rate correctly", function(){
    //create an object to test
    const values = {
      amount: 200,
      rate: 2,
      years: 5,
    };

    expect(calculateMonthlyPayment(values)).toEqual("33.34");
  });

  it("should return a result with 2 decimal places", function(){

  });
});