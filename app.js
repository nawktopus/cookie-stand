'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

let allStores = [];

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



/*let seattle = {
    minCus: 23,
    maxCus: 65,
    avgCookie: 6.3,
    totalArray: [],
    dailyTotal: 0,
    
    rand: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
    
    },

    generateCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let cook = this.avgCookie * this.rand();
            let roundedCookies = Math.round(cook);
            this.totalArray.push(roundedCookies);
            this.dailyTotal += roundedCookies;
            //console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('sea');
        let name = document.createElement('td');
        name.textContent = 'Seattle';
        list.appendChild(name);
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('td');
            entry.textContent =this.totalArray[i];
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('td');
        totalEntry.textContent = this.dailyTotal;
        list.appendChild(totalEntry);
    },

    last: function() {
        hour1.push(this.totalArray[0]);
        this.total = hour1[0];
     
},
}
seattle.display();
seattle.last();

let tokyo = {
    minCus: 3,
    maxCus: 24,
    avgCookie: 1.2,
    totalArray: [],
    dailyTotal: 0,

    rand: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
    
    },

    generateCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let cook = this.avgCookie * this.rand();
            let roundedCookies = Math.round(cook);
            this.totalArray.push(roundedCookies);
            this.dailyTotal += roundedCookies;
            //console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('to');
        let name1 = document.createElement('td');
        name1.textContent = 'Tokyo';
        list.appendChild(name1);
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('td');
            entry.textContent = this.totalArray[i];
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('td');
        totalEntry.textContent = this.dailyTotal;
        list.appendChild(totalEntry);
    },
    
    last: function() {
        hour1.push(this.totalArray[0]);
        this.total = hour1[0];
    },
}

tokyo.display();
tokyo.last();

let dubai = {
    minCus: 11,
    maxCus: 38,
    avgCookie: 3.7,
    totalArray: [],
    dailyTotal: 0,

    rand: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
    
    },

    generateCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let cook = this.avgCookie * this.rand();
            let roundedCookies = Math.round(cook);
            this.totalArray.push(roundedCookies);
            this.dailyTotal += roundedCookies;
            //console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('du');
        let name2 = document.createElement('td');
        name2.textContent = 'Dubai';
        list.appendChild(name2);
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('td');
            entry.textContent =this.totalArray[i];
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('td');
        totalEntry.textContent = this.dailyTotal ;
        list.appendChild(totalEntry);
    },
    last: function() {
        hour1.push(this.totalArray[0]);
        this.total = hour1[0];
        //console.log(finalSales[2]);
    },
}

dubai.display();
dubai.last();
let paris = {
    minCus: 20,
    maxCus: 38,
    avgCookie: 2.3,
    totalArray: [],
    dailyTotal: 0,

    rand: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
    
    },

    generateCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let cook = this.avgCookie * this.rand();
            let roundedCookies = Math.round(cook);
            this.totalArray.push(roundedCookies);
            this.dailyTotal += roundedCookies;
            //console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('pa');
        let name3 = document.createElement('td');
        name3.textContent = 'Paris';
        list.appendChild(name3);
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('td');
            entry.textContent = this.totalArray[i];
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('td');
        totalEntry.textContent = this.dailyTotal;
        list.appendChild(totalEntry);
    },
    last: function() {
        hour1.push(this.totalArray[0]);
        this.total = hour1[0];
        //console.log(finalSales[3]);
    },
}

paris.display();
paris.last();

let lima = {
    minCus: 2,
    maxCus: 16,
    avgCookie: 4.6,
    totalArray: [],
    dailyTotal: 0,

    rand: function () {
        return Math.floor(Math.random() * (this.maxCus - this.minCus + 1)) + this.minCus;
    
    },

    generateCookies: function() {
        for (let i = 0; i < hours.length; i++) {
            let cook = this.avgCookie * this.rand();
            let roundedCookies = Math.round(cook);
            this.totalArray.push(roundedCookies);
            this.dailyTotal += roundedCookies;
            //console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('lim');
        let name4 = document.createElement('td');
        name4.textContent = 'Lima';
        list.appendChild(name4);
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('td');
            entry.textContent = this.totalArray[i];
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('td');
        totalEntry.textContent = this.dailyTotal;
        list.appendChild(totalEntry);
    },
    last: function() {
        hour1.push(this.totalArray[0]);
        this.total = hour1[0];
        //console.log(finalSales[4]);
    },
}

lima.display();
lima.last();
console.log(hour1);


for (let i=0; i < hour1.length; i++) {
        total += hour1[i];        
}

for (let i=0; i <hour1.length;i++) {
    first += hour1[i];
}

let sixAm =  document.getElementById('grand');
let name5 = document.createElement('td');
name5.textContent = 'Totals';
sixAm.appendChild(name5);
let en = document.createElement('td')
en.textContent = first; 
sixAm.appendChild(en);

console.log(first);
lastArray.push(total); */
 