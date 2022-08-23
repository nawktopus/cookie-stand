'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',]

let seattle = {
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
            console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('seattle');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('li');
        totalEntry.textContent = 'Total: ' + this.dailyTotal;
        list.appendChild(totalEntry);
    }
    
}

seattle.display();

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
            console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('tokyo');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('li');
        totalEntry.textContent = 'Total: ' + this.dailyTotal;
        list.appendChild(totalEntry);
    }
    
}

tokyo.display();

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
            console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('dubai');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('li');
        totalEntry.textContent = 'Total: ' + this.dailyTotal;
        list.appendChild(totalEntry);
    }
    
}

dubai.display();

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
            console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('paris');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('li');
        totalEntry.textContent = 'Total: ' + this.dailyTotal;
        list.appendChild(totalEntry);
    }
    
}

paris.display();

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
            console.log(this.totalArray, this.dailyTotal);
        };
            
    },
    
    display: function() {
        this.generateCookies();
        let list = document.getElementById('lima');
        for(let i = 0; i < hours.length; i++){
            let entry = document.createElement('li');
            entry.textContent = hours[i] + ': ' + this.totalArray[i] + ' Cookies';
            list.appendChild(entry);
        }
        let totalEntry = document.createElement('li');
        totalEntry.textContent = 'Total: ' + this.dailyTotal;
        list.appendChild(totalEntry);
    }
    
}

lima.display();