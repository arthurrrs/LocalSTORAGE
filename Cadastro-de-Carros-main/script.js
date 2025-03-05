document.addEventListener("DOMContentLoaded", function () {
        loadCars();

        var carForm = document.getElementById("car-form");
        carForm.addEventListener("submit", addCar);


});


//carregar os carros 

function loadCars() {
    var carlist = document.getElementById("car-list");
    var cars = JSON.parse(localStorage.getItem("cars")) || [];
    carlist.innerHTML = "";

    for (let i = 0; i < cars.length; i++) {
        addCarToList(cars[i], i);
    }

}

//adicionar os carros a lista

function nameCarToList(car, index) {
    var carList = document.getElementById("car-list");
    var li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = "<span><strong>" + car.model + "</strong> - " + car.year + " - $ " + car.price + "</span>" + 
        "<button class = 'btn btn-danger btn-sm' onclick = 'deleteCar(" + index + ")'></button>"
        carList.appendChild(li);

}
