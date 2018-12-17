// BUDGET CONTROLLER
var budgetController = (function(){

})();



// UI CONTROLLER
var UIController = (function(){

  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  }

  return{
    getInput: function(){
      return{
        type: document.querySelector(DOMstrings.inputType).value,
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings: function(){
      return DOMstrings;
    }
  };

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

  var DOM = UICtrl.getDOMstrings();

  var ctrlAddItem = function(){

    //Get input field data
    var input = UICtrl.getInput();
    console.log(input);

    // Add the item to the budget CONTROLLER

    //Add the item to the UI

    // Calculate the budget

    //Display the budget on the UI

  }

  document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event){

    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
