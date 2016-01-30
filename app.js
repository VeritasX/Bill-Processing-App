'use strict';
var BillsOutPut = [];
var AmountsToAdd = [];
var costAmount = 0;
var parseCost;
var AmountChanged;


var submitThis = function() {

  var bill = document.getElementById('bill').value;
  var amount = document.getElementById('amounts').value;
  var outputDiv = document.getElementById('output');

  function clear(){
    while (outputDiv.hasChildNodes()) {
      outputDiv.removeChild(outputDiv.firstChild);
    }
  }

  function getYourBills() {
    var totalAmount;

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

    clear();

    parseAmount();
    modifyAmount();
    addTheCost();
    BillsOutPut.push(bill);
    AmountsToAdd.push(AmountChanged);
    totalAmount = costAmount.toFixed(2);


      for (let i = 0; i < BillsOutPut.length; i++) {
        outputDiv.innerHTML += '<p> Bill: ' + BillsOutPut[i] + '&#8195;&#8195;&#8195;&#8195; Amount: &#8195;' + AmountsToAdd[i] + '    </p>';
      }
      outputDiv.innerHTML += '<h3> Final Total: $' + totalAmount + ' </h3>';

  }
  if (amount == ''){
    clear();
    outputDiv.innerHTML+= '<h3>Please input an amount!</h3>';
  }else {
    getYourBills();

  }

}

