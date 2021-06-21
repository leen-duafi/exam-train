let format = document.getElementById("format2")
format.addEventListener("submit", addCat);


let count = 0;

function addCat(event) {

    event.preventDefault();

    let name = event.target.name.value;
    let age = event.target.age.value;
    let boy = event.target.boy.checked;
    let girl = event.target.girl.checked;
    let colors = event.target.colors.value.split(',');

    console.log(name, age, boy, girl, colors);

    let newCat = new Cat(name, age, boy, girl, colors);

    console.log(newCat);


    newCat.render();
    newCat.list();
    newCat.img();
    newCat.gender();
    newCat.random();

    table.textContent = "";
    div2.textContent = "";
    div3.textContent = "";
    div4.textContent = "";

    getHeader();



    for (let i = 0; i < cats.length; i++) {
        cats[i].render();
        cats[i].list();
        cats[i].img();
        cats[i].gender();
    }

    format.reset();

    store();
    count++
    if (count == 2) {
        alert('that is enough cat')
    }
    console.log(count);

}


cats = [];
function Cat(name, age, boy, girl, colors) {
    this.name = name;
    this.age = age;
    this.boy = boy;
    this.girl = girl;
    this.homes = 0;
    this.colors = colors;
    cats.push(this);
}

let tableDiv = document.getElementById("div1");
let table = document.createElement("table")
tableDiv.appendChild(table);

function getHeader() {
    let thELement = document.createElement("th")
    table.appendChild(thELement)
    thELement.textContent = "name";

    let thELement2 = document.createElement("th")
    table.appendChild(thELement2)
    thELement2.textContent = "age";

    let thELement3 = document.createElement("th")
    table.appendChild(thELement3)
    thELement3.textContent = "a boy cat";

    let thELement4 = document.createElement("th")
    table.appendChild(thELement4)
    thELement4.textContent = "a girl cat";

    let thELement5 = document.createElement("th")
    table.appendChild(thELement5)
    thELement5.textContent = " stayed at home for ";

    // for (let i = 0; i < colors.length; i++) {
    //     let thELement6 = document.createElement("th")
    //     table.appendChild(thELement6)
    //     thELement6.textContent = " colors ";

    // }

}

Cat.prototype.render = function () {

    let trElement = document.createElement("tr");
    table.appendChild(trElement)
    let tdElement = document.createElement('td')
    trElement.appendChild(tdElement)
    tdElement.textContent = this.name

    let tdElement2 = document.createElement('td')
    trElement.appendChild(tdElement2)
    tdElement2.textContent = this.age;

    let tdElement3 = document.createElement('td')
    trElement.appendChild(tdElement3)
    tdElement3.textContent = this.boy;

    let tdElement4 = document.createElement('td')
    trElement.appendChild(tdElement4)
    tdElement4.textContent = this.girl;

    let tdElement5 = document.createElement('td')
    trElement.appendChild(tdElement5)
    tdElement5.textContent = this.homes;

    // for (let i = 0; i < colors.length; i++) {
    //     let tdElement6 = document.createElement('td')
    //     trElement.appendChild(tdElement6)
    //     tdElement6.textContent = this.colors[i];
    // }


}

Cat.prototype.list = function () {


    let list = document.getElementById("div2")
    let ulElement = document.createElement('ul')
    list.appendChild(ulElement)
    let liElement = document.createElement('li')
    ulElement.appendChild(liElement)
    liElement.textContent = `my name is ${this.name} and my age is ${this.age}`

    for (let i = 0; i < colors.length; i++) {
        let liElement2 = document.createElement('li')
        ulElement.appendChild(liElement2)
        liElement2.textContent = this.colors[i]
    }
}


Cat.prototype.img = function () {

    let img = document.getElementById("div3")
    let imgElement = document.createElement('img')
    img.appendChild(imgElement);
    imgElement.setAttribute('src', 'img/' + this.name + '.jpg');
}

Cat.prototype.gender = function () {
    let gender = document.getElementById("div4")
    let one = document.createElement('li')
    gender.appendChild(one)
    one.textContent = `this cat is a boy ${this.boy}`;

    let two = document.createElement('li')
    gender.appendChild(two)
    two.textContent = `this cat is a girl ${this.girl}`;

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Cat.prototype.random = function () {
    this.homes = randomNumber(3, 12) + ` months`
}


function store() {
    let storage = JSON.stringify(cats)
    localStorage.setItem('cats', storage)
}


function show() {
    let data = localStorage.getItem('cats');
    let parsed = JSON.parse(data)
    getHeader();
    for (let i = 0; i < parsed.length; i++) {

        let pop = new Cat(parsed[i].name, parsed[i].age, parsed[i].boy, parsed[i].girl, parsed[i].colors)

        pop.render();
        pop.list();
        pop.img();
        pop.gender();
        pop.random();


    }


}

show();