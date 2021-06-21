`use strict`

let format = document.getElementById('format3')
format.addEventListener('submit', addDog)

function addDog(event) {
    event.preventDefault();
    let name = event.target.name.value;
    let age = event.target.age.value;

    console.log(name, age);

    let newDog = new Dog(name, age)

    console.log(newDog);


    newDog.render();
    newDog.list();

    table.textContent = "";
    div2.textContent = "";
    getHeader();

    for (let i = 0; i < dogs.length; i++) {
        dogs[i].render();
        dogs[i].list();

    }

    format.reset()

    store();

}

dogs = [];
function Dog(name, age) {
    this.name = name;
    this.age = age;
    dogs.push(this)
}

let div = document.getElementById('div1')
let table = document.createElement('table');
div.appendChild(table);

function getHeader() {

    let thElement = document.createElement('th');
    table.appendChild(thElement);
    thElement.textContent = "name";

    let thELement2 = document.createElement('th');
    table.appendChild(thELement2);
    thELement2.textContent = "age";

}

Dog.prototype.render = function () {
    let trElement = document.createElement('tr')
    table.appendChild(trElement);
    let tdElement = document.createElement('td')
    trElement.appendChild(tdElement)
    tdElement.textContent = this.name

    let tdElement2 = document.createElement('td')
    trElement.appendChild(tdElement2)
    tdElement2.textContent = this.age;
}

Dog.prototype.list = function () {
    let list = document.getElementById('div2');
    let ulElement = document.createElement('ul');
    list.appendChild(ulElement);
    let liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = `my dog name is ${this.name} and he is ${this.age} years old `
}

function store() {
    let Storage = JSON.stringify(dogs);
    localStorage.setItem('dogs', Storage)
}

function show() {
    let data = localStorage.getItem('dogs');
    let parsed = JSON.parse(data);
    getHeader();
    for (let i = 0; i < parsed.length; i++) {
        let pop = new Dog(parsed[i].name, parsed[i].age)
        pop.render();
        pop.list();

    }
}

show();