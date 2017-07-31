{
  let carsArr;
  CarLot.giveMeCars = function(cars) {
    let divArr = [];
    let contentArr = [];
    let content = '';
    let counter = -1;
    let divOutPut = document.getElementById("carCards");
    carsArr = cars.cars;
    for (var i = 0; i < carsArr.length; i++) {
      if (i % 3 === 0){
        counter++;
        let createDivContent = '';
        createDivContent = `<div class="container row" id="row${counter}"></div>`;
        divArr.push(createDivContent);
        content = ''
      };
      let eachCar = carsArr[i];
      content = `
                <div class="col-md-4 eachCarCard">
                <h3>${eachCar.make}</h3>
                <h3>${eachCar.model}</h3>
                <h3>${eachCar.year}</h3>
                <h3>${eachCar.price}</h3>
                <p>${eachCar.description}</p>
                </div>
                `;
      // console.log(contentArr);
      if (!contentArr[counter]) {
        contentArr[counter] = content;
        // console.log(contentArr);
      } else {
        contentArr[counter] += content;
        // console.log(contentArr);
      }
    }
  }
}
