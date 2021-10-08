"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class Locations
var Locations = /** @class */ (function () {
    function Locations(name, city, zip, adress, image, date) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        this.image = image;
        this.date = date;
    }
    Locations.prototype.display1 = function () {
        return "\n        <div class=\"card p-0 shadow-lg bg-body rounded m-1\"><img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\" />";
    };
    Locations.prototype.display2 = function () {
        return "\n        \n          <h4 class=\"card-header text-center\">" + this.name + "</h4><div class=\"card-body p-2\">";
    };
    Locations.prototype.display3 = function () {
        return "\n          <p class=\"card-text\"><b>Address:</b>  " + this.adress + " , " + this.zip + "  " + this.city + "</p>\n      ";
    };
    Locations.prototype.display10 = function () {
        return "</div><div class=\"card-footer text-center\"><p class=\"h6\">Created on  " + this.date.toUTCString() + "</p></div></div>";
    };
    Locations.prototype.display = function () {
        return this.display1() + this.display2() + this.display3() + this.display10();
    };
    return Locations;
}());
//Class Restaurant
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip, adress, image, cuisine, telefon, web, date) {
        var _this = _super.call(this, name, city, zip, adress, image, date) || this;
        _this.name = name;
        _this.city = city;
        _this.zip = zip;
        _this.adress = adress;
        _this.image = image;
        _this.cuisine = cuisine;
        _this.telefon = telefon;
        _this.web = web;
        _this.date = date;
        return _this;
    }
    Restaurant.prototype.display4 = function () {
        return "\n                <p>" + this.cuisine + "</p>";
    };
    Restaurant.prototype.display5 = function () {
        return "  <p class=\"card-text\"><b>Telefon:</b> " + this.telefon + "<br/><b>Website:</b> " + this.web + "</p>\n            ";
    };
    Restaurant.prototype.display = function () {
        return _super.prototype.display1.call(this) + _super.prototype.display2.call(this) + this.display4() + _super.prototype.display3.call(this) + this.display5() + _super.prototype.display10.call(this);
    };
    return Restaurant;
}(Locations));
//Class Event
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, event, city, zip, adress, image, web, day, time, price, date) {
        var _this = _super.call(this, name, city, zip, adress, image, date) || this;
        _this.name = name;
        _this.event = event;
        _this.city = city;
        _this.zip = zip;
        _this.adress = adress;
        _this.image = image;
        _this.web = web;
        _this.day = day;
        _this.time = time;
        _this.price = price;
        _this.date = date;
        return _this;
    }
    Events.prototype.display6 = function () {
        return "\n              <h5 class=\"card-title\">" + this.event + "</h5>";
    };
    Events.prototype.display7 = function () {
        return "<p class=\"h5 text-primary text-center\"> Concert On " + this.day + " at " + this.time + "</p>";
    };
    Events.prototype.display8 = function () {
        return "<p><b>Webseite:</b> " + this.web + "</p>";
    };
    Events.prototype.display9 = function () {
        return "<p class=\"h5 text-end text-success\"> Price:  \u20AC " + (this.price).toFixed(2) + "</p>";
    };
    Events.prototype.display = function () {
        return _super.prototype.display1.call(this) + _super.prototype.display2.call(this) + this.display7() + this.display6() + _super.prototype.display3.call(this) + this.display8() + this.display9() + _super.prototype.display10.call(this);
    };
    return Events;
}(Locations));
//creating the Dates
var a = new Date(1987, 8, 30, 5, 33, 30);
var b = new Date(2016, 1, 26, 16, 34, 30);
var c = new Date(2017, 11, 23, 7, 33, 25);
var d = new Date(2021, 9, 24, 8, 42, 30);
var e = new Date(2019, 7, 1, 16, 0, 30);
var f = new Date(2018, 3, 24, 10, 33, 30);
//Creating the Objects
var L1 = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg", a);
var L2 = new Locations("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg", b);
var R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.png", "Thai Restaurant", "+43(1)5812308", "lemonleaf.at", c);
var R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/scho.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "sixta-restaurant.at", d);
var E1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/kris.jpg", "kriskristofferson.com", "Fr., 15.11.2021", "20:00", 58.50, e);
var E2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/lenny.jpg", "lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80, f);
//Array with Objekts
var cards = [L1, L2, R1, R2, E1, E2];
//Array with classes
for (var i = 0; i < cards.length; i++) {
    document.getElementById("travel").innerHTML += cards[i].display();
}
//Sort by Date
//Ascending
function sortA() {
    cards.sort(function (a, b) { return a.date - b.date; });
    document.getElementById("travel").innerHTML = "";
    for (var i = 0; i < cards.length; i++) {
        document.getElementById("travel").innerHTML += cards[i].display();
    }
}
document.getElementById("sortasc").addEventListener("click", function () {
    sortA();
});
//Descending
function sortD() {
    cards.sort(function (a, b) { return b.date - a.date; });
    document.getElementById("travel").innerHTML = "";
    for (var i = 0; i < cards.length; i++) {
        document.getElementById("travel").innerHTML += cards[i].display();
    }
}
document.getElementById("sortdesc").addEventListener("click", function () {
    sortD();
});
