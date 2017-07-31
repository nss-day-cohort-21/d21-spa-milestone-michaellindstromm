{
  // This IIFE will add a new module to Carlot in the
  // namespace of CarLot.Inventory
  var CarLot = {}

    // Define a private scope variable to store cars
  let _car_inventory = [];

  // Start building the Object that will be attached
  // to the CarLot.Inventory namespace
  let inventory = {}
  inventory.loadInventory = function (callback) {
    var load = new XMLHttpRequest();
    load.addEventListener("load", function () {
      // Add each car to the private _car_inventory array
      _car_inventory = JSON.parse(this.responseText);
      callback(_car_inventory)
    });
    load.open("GET", "inventory.json");
    load.send();
  }

  // If this is the first module that gets evaluated,
  // CarLot will be `undefined` and a new empty object
  // will augmented.
  CarLot.Inventory = inventory;
}
