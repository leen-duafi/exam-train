`use strict`;

customers = [];
function customer(name, age) {
    this.name = name;
    this.age = age;
    customers.push(this);
}


let parent = document.getElementById("div1");
let table = document.createElement('table')
parent.appendChild(table);

function getHeader() {

    let thElement = document.createElement('th');
    table.appendChild(thElement);
    thElement.textContent = `name`;

    let thElement2 = document.createElement('th')
    table.appendChild(thElement2);
    thElement2.textContent = `age`;

}

customer.prototype.render = function () {

    let trElement = document.createElement('tr')
    table.appendChild(trElement)

    let tdElement = document.createElement('td')
    trElement.appendChild(tdElement)
    tdElement.textContent = this.name;

    let tdElement2 = document.createElement('td')
    trElement.appendChild(tdElement2)
    tdElement2.textContent = this.age;

}

// function getFooter() {

//     let thElement = document.createElement('th');
//     table.appendChild(thElement);
//     thElement.textContent = `name`;

//     let thElement2 = document.createElement('th')
//     table.appendChild(thElement2);
//     thElement2.textContent = `age`;

// }

customer.prototype.list = function () {
    let list = document.getElementById("list")
    let ulElement = document.createElement('ul')
    list.appendChild(ulElement)
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent = `my name is ${this.name} and my age is ${this.age}`
}
let format = document.getElementById("format")
format.addEventListener("submit", addCustomer)

function addCustomer(event) {
    event.preventDefault();

    let name = event.target.name.value;
    let age = event.target.age.value;

    console.log(name, age);

    let newCustomer = new customer(name, age)

    console.log(newCustomer);

    newCustomer.render();
    newCustomer.list();
    table.textContent = "";
    list.textContent = "";
    getHeader();

    for (let i = 0; i < customers.length; i++) {
        customers[i].render();
        customers[i].list();
    }


    format.reset();
    store();

}




function store() {
    let storage = JSON.stringify(customers)
    localStorage.setItem('customers', storage)
}

function appear() {
    let data = localStorage.getItem('customers');
    let parsed = JSON.parse(data)
    getHeader();
    for (let i = 0; i < parsed.length; i++) {

        let pop = new customer(parsed[i].name, parsed[i].age)
        pop.render();
        pop.list();
    }


}

appear();