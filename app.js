'use strict';
var BillsOutPut = [];
var AmountsToAdd = [];
var costAmount = 0;
var parseCost;
var AmountChanged;


var submitThis = function() {

  var bill = document.getElementById('bill').value;
  var amount = document.getElementById('amount').value;
  var outputDiv = document.getElementById('output');
  function getYourBills() {


    function parseAmount() {
      parseCost = parseFloat(amount).toFixed(2);
    }

    function modifyAmount() {
      AmountChanged = '$' + parseCost;
    }
    function addTheCost() {
      var parseIt = parseFloat(amount);
      costAmount = costAmount + parseIt;
    }

    while (outputDiv.hasChildNodes()) {
      outputDiv.removeChild(outputDiv.firstChild);
    }
    parseAmount();
    modifyAmount();
    addTheCost();
    BillsOutPut.push(bill);
    AmountsToAdd.push(AmountChanged);
    var totalAmount = costAmount.toFixed(2);
    for (let i = 0; i < BillsOutPut.length; i++) {
      outputDiv.innerHTML += '<p> Bill: ' + BillsOutPut[i] + '&#8195;&#8195;&#8195;&#8195; Amount: &#8195;' + AmountsToAdd[i] + '    </p>';
    }
    outputDiv.innerHTML += '<h3> Final Total: $' + totalAmount + ' </h3>';
  }

  if (amount == null) {
    outputDiv.innerHtml += '<h3> Please input your bills</h3>';
  } else {
    getYourBills();
  }
}



//output the amount of the outputAmount variable  to the out




//allow the user to input a bill
//When the user clicks the submit button bill is put into an array.



//allow the user to input a amount
//when the user clicks the submit button it adds the amouunt of the bill to an array and then adds the amount of the total in the array and stores it in an outputAmount variable
