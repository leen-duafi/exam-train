let format = document.getElementById('format4');
format, addEventListener('submit', addShop);

function addShop(event) {

    event.preventDefault();
    let cookieShopName = event.target.cookieShopName.value;
    let hoursOfWorking = event.target.hoursOfWorking.value;

    console.log(hoursOfWorking, cookieShopName);

    let newShop = new Shop(cookieShopName, hoursOfWorking);

    console.log(newShop);

    getHeader();
    newShop.multi();
    newShop.sum();
    newShop.random();
    newShop.render();
    getFooter();
}

shops = [];
function Shop(cookieShopName, hoursOfWorking) {
    this.cookieShopName = cookieShopName;
    this.hoursOfWorking = hoursOfWorking;
    this.randomCookie = 0;
    this.totalCookiesPerShop = 0;
    shops.push(this);
}

let div = document.getElementById('table');
let table = document.createElement('table');
div.appendChild(table);

function getHeader() {
    let thElement = document.createElement('th');
    table.appendChild(thElement);
    thElement.textContent = "cookieShopName"

    let thElement2 = document.createElement('th');
    table.appendChild(thElement2);
    thElement2.textContent = "hoursOfWorking"

    let thElement3 = document.createElement('th');
    table.appendChild(thElement3);
    thElement3.textContent = "average cookie per hour ";

    let thElement4 = document.createElement('th');
    table.appendChild(thElement4);
    thElement4.textContent = "total cookies per shop ";

}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

Shop.prototype.random = function () {
    this.randomCookie = randomNumber(2, 10)
    console.log(typeof (this.randomCookie));
}

Shop.prototype.multi = function () {
    this.hoursOfWorking = parseInt(this.hoursOfWorking)
    this.totalCookiesPerShop = hoursOfWorking * this.randomCookie;
    console.log(this.totalCookiesPerShop);
    console.log(typeof (this.hoursOfWorking));
}

Shop.prototype.sum = function () {
    this.totalCookiesPerShop = 0
    for (let i = 0; i < shops.length; i++) {
        this.totalCookiesPerShop++

    }

    console.log(this.totalCookiesPerShop);
}
Shop.prototype.render = function () {
    let trElement = document.createElement('tr');
    table.appendChild(trElement);
    let tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.cookieShopName;

    let tdElement2 = document.createElement('td');
    trElement.appendChild(tdElement2);
    tdElement2.textContent = this.hoursOfWorking;

    let tdElement3 = document.createElement('td');
    trElement.appendChild(tdElement3);
    tdElement3.textContent = this.randomCookie;

    let tdElement4 = document.createElement('td');
    trElement.appendChild(tdElement4);
    tdElement4.textContent = this.totalCookiesPerShop;
}

function getFooter() {

    let trElement = document.createElement('tr')
    table.appendChild(trElement);
    let thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent = "total";

    let thElement2 = document.createElement('th');
    trElement.appendChild(thElement2);
    thElement2.textContent = this.totalCookiesPerShop;
}