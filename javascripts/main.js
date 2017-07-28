{
  let content = '';
  let make;
  let description;
  let model;
  let price;
  let year;
  let body = document.getElementById("body");
  let giveMeCars = function(cars) {
    let carsArr = cars.cars;
    console.log(carsArr);
    for (var i = 0; i < carsArr.length; i++) {
      let eachCar = carsArr[i];
      make = eachCar.make;
      description = eachCar.description;
      model = eachCar.model;
      price = eachCar.price;
      year = eachCar.year;
      content += `
                  <div class=container>
                    <h3>${make}</h3>
                    <h3>${model}</h3>
                    <h4>${year}</h4>
                    <h3>${price}</h4>
                    <p>${description}</p>
                  </div>
                  `
      body.innerHTML = content;
    }
    console.log(make, model, description, price, year);
  }
  CarLot.Inventory.loadInventory(giveMeCars)
}
