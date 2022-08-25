'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

function Store(name, minCus, maxCus, avgCookie) {
    this.name = name;
    this.minCus = minCus;
    this.maxCus = maxCus;
    this.avgCookie = avgCookie;
    this.totalCookiesPerHour = [];
    this.dailyTotal = 0;
    allStores.push(this);
}    
    
Store.prototype.perHour = function() {
    for (let i=0; i < hours.length; i++) {
    let res = genBetween(this.minCus, this.maxCus);
    let totalCookiesHour = res * this.avgCookie;
    let roundedCookies = Math.round(totalCookiesHour);
    this.totalCookiesPerHour.push(roundedCookies);
    this.dailyTotal += roundedCookies;
    }
};
    
Store.prototype.display = function() {
    this.perHour();
    let table = document.getElementById('myTable');
    let th = document.createElement('th');
    let ro = document.createElement('tr');
    th.textContent = this.name;
     ro.appendChild(th);
    table.appendChild(ro);
    for(let i = 0; i < this.totalCookiesPerHour.length; i++){
    let entry = document.createElement('td');
    ro.appendChild(entry);
    entry.textContent = `${this.totalCookiesPerHour[i]}`;
    }
    let totalEntry = document.createElement('td');
    ro.appendChild(totalEntry);
    totalEntry.textContent = `${this.dailyTotal}`;
}; 

function genBetween(low,high) {
    return Math.floor(Math.random() * (high - low + 1)) + low;
}

function generateFooter() {
    let table = document.getElementById("grand");

    let row = document.createElement('tr');
    let head = document.createElement('th');
    head.textContent = 'Totals';
    row.appendChild(head);
    table.appendChild(row);

    for (let hour in hours) {
        let salesPeHour = 0;
        let cell = document.createElement('td');
        for (let store in allStores) {
            let currentStore = allStores[store];
            let currentSale = currentStore.totalCookiesPerHour[hour];
            salesPeHour += currentSale;
        }
        cell.textContent = salesPeHour;
        row.appendChild(cell);
}
    let cell = document.createElement('td');
    let totals = 0;
    for (let store of allStores) {
        totals += store.dailyTotal;
    }
    cell.textContent = totals;
    row.appendChild(cell);
}    
let allStores = [];

new Store('Seattle', 23, 65, 6.3,);
new Store('Tokyo', 3, 24, 1.2,);
new Store('Dubai', 11, 38, 3.7,);
new Store('Paris', 20, 38, 2.3,);
new Store('Lima', 2, 16, 4.6, );

allStores[0].display();
allStores[1].display();
allStores[2].display();
allStores[3].display();
allStores[4].display();
generateFooter();

let head1 = document.getElementById('head');
let cell1 = document.createElement('th');
let cell3 = document.createElement('td');
cell3.textContent = ' ';
cell1.appendChild(cell3);
head1.appendChild(cell1);

for (let i = 0; i < hours.length; i++) {
let header = document.getElementById('head');
let cell = document.createElement('th');
let cell2 = document.createElement('td');
cell2.textContent = hours[i];
cell.appendChild(cell2);
header.appendChild(cell);
}

let head2 = document.getElementById('head');
let cell4 = document.createElement('th');
let cell5 = document.createElement('td');
cell5.textContent = 'Daily Totals';
cell4.appendChild(cell5);
head2.appendChild(cell4);