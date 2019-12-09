(function () {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .controller('ToBuyController',ToBuyController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService']
  function ToBuyController(ShoppingListCheckOffService) {

    var toBuy = this;

    toBuy.name = "";
    toBuy.qunatity = "";

    toBuy.addItem = function () {
      ShoppingListCheckOffService.addToBuyList(toBuy.name,toBuy.qunatity);
    }

    toBuy.items = ShoppingListCheckOffService.getToBuyList();

    toBuy.bought = function (itemIndex) {
      ShoppingListCheckOffService.boughtHandler(itemIndex);
    }

  };

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
  function AlreadyBoughtController(ShoppingListCheckOffService) {

    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtList();

  };

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [{ name: "cookies", quantity: 10 },{ name: "beer", quantity: 2 },{ name: "pizza", quantity: 1 },{ name: "coke", quantity: 2 },{ name: "car", quantity: 1 }];

    service.addToBuyList = function (itemName,itemQunatity) {
      var item ={
        name: itemName,
        quantity: itemQunatity
      };
      toBuyList.push(item);
    }

    var alreadyBoughtList = [];

    service.boughtHandler = function (itemIndex) {
      var item = toBuyList[itemIndex];
      toBuyList.splice(itemIndex, 1);
      alreadyBoughtList.push(item);
    }

    service.getToBuyList = function () {
      return toBuyList;
    }

    service.getAlreadyBoughtList = function () {
      return alreadyBoughtList;
    }
  }

})();
