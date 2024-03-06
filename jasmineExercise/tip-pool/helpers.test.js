describe("Helpers Test (with setup and teardown)", function(){

    beforeEach(function(){
        allPayments = {
            payment1: { tipAmt: 10, billAmt: 100, tipPercent: 10 },
            payment2: { tipAmt: 20, billAmt: 200, tipPercent: 10 },
            payment3: { tipAmt: 30, billAmt: 300, tipPercent: 10 }
        }

    });

    it("should calculate the asked for total from a given Object sumPaymentTotal",function(){
        let tips = sumPaymentTotal("tipAmt");
        let bills = sumPaymentTotal("billAmt");
        let tipPercs = sumPaymentTotal("tipPercent");
        console.log(tips);
        console.log(bills)
        console.log(tipPercs);
        expect(tips).toBe(60);
        expect(bills).toBe(600);
        expect(tipPercs).toBe(30);
    });

    it("should calculate the Tip Percent calculateTipPercet", function(){
        expect(calculateTipPercent(100,20)).toBe(20);
    })

    it("should append a new Table Row element to a new td element appendTd", function(){
        let throwawayTr = document.createElement("tr");
        appendTd(throwawayTr, "hello!");

        let newTdTest = throwawayTr.lastElementChild;
        expect(newTdTest.innerText).toBe("hello!");

        throwawayTr.remove;
    });

    afterEach(function(){
        allPayments = {};
    });

})