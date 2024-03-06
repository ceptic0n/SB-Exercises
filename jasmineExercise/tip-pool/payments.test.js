describe("Payments Test (with setup and teardown Logic)", function(){

    //simulate user Input to test
    beforeAll(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });


    it("should add a new row after using submitPaymentInfo()", function(){
        submitPaymentInfo();

        let camera = document.querySelector("#payment1 td");
        expect(camera.innerText).toBe("$100");
    })

    it("should return empty if given undefined inputsreateCurPayment", function(){
        createCurPayment();

        expect(billAmt.innerText).toBe("");
        expect(tipAmt.innerText).toBe("");
    })

    it("should add 3 new tds to the table appendPaymentTable", function(){
        submitPaymentInfo();
        let camera = document.querySelector("#payment1");

        expect(camera.querySelectorAll("td").length).toBe(4);
    });

    it("should create update the summary with the proper values updateSummary()", function(){
        let tds = document.querySelectorAll("#summaryTable td");

        expect(tds[0].innerText).toBe("$100");
        expect(tds[1].innerText).toBe("$20");
        expect(tds[2].innerText).toBe("20%");
    });

    //tearDown
    afterAll(function(){
        billAmtInput.value = "";
        tipAmtInput.value = "";
    })

})