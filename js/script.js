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
        return "\n        <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\"><div class=\"card-body m-auto p-2\">";
    };
    Locations.prototype.display2 = function () {
        return "\n        \n          <h5 class=\"card-title\">" + this.name + "</h5>";
    };
    Locations.prototype.display3 = function () {
        return "\n          <p class=\"card-text\"><b>Address:</b>  " + this.adress + " , " + this.zip + "  " + this.city + "</p>\n      ";
    };
    Locations.prototype.display10 = function () {
        return "<p>Created on  " + this.date[2] + "." + this.date[1] + "." + this.date[0] + " at " + this.date[3] + ":" + this.date[4] + "</p></div>";
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
        return "\n                <div class=\"p-2\"><p>" + this.cuisine + "</p>";
    };
    Restaurant.prototype.display5 = function () {
        return "  <p class=\"card-text\"><b>Telefon:</b> " + this.telefon + "<br/><b>Website:</b> " + this.web + "</p></div\n            ";
    };
    Restaurant.prototype.display = function () {
        return _super.prototype.display1.call(this) + _super.prototype.display2.call(this) + this.display4() + _super.prototype.display3.call(this) + this.display5() + _super.prototype.display10.call(this);
    };
    return Restaurant;
}(Locations));
//Class Event
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(event, name, city, zip, adress, image, web, day, time, price, date) {
        var _this = _super.call(this, name, city, zip, adress, image, date) || this;
        _this.event = event;
        _this.name = name;
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
        return "\n              <h4 class=\"card-title\">" + this.event + " Concert</h4>";
    };
    Events.prototype.display7 = function () {
        return "<p class=\"h5 text-primary text-center\"> On " + this.day + " at " + this.time + "</p>";
    };
    Events.prototype.display8 = function () {
        return "<p><b>Webseite:</b> " + this.web + "</p>\n            </div>";
    };
    Events.prototype.display9 = function () {
        return "<p class=\"h5 text-end text-success\"> Price:  \u20AC " + (this.price).toFixed(2) + "<p/>";
    };
    Events.prototype.display = function () {
        return _super.prototype.display1.call(this) + this.display6() + this.display7() + _super.prototype.display2.call(this) + _super.prototype.display3.call(this) + this.display8() + this.display9() + _super.prototype.display10.call(this);
    };
    return Events;
}(Locations));
//Creating the Objects
var L1 = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg", [2021, 09, 23, 12, 30]);
var L2 = new Locations("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg", [2021, 09, 23, 12, 30]);
var R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.png", "Thai Restaurant", "+43(1)5812308", "lemonleaf.at", [2021, 09, 23, 12, 30]);
var R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/scho.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "sixta-restaurant.at", [2021, 09, 23, 12, 30]);
var E1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/kris.jpg", "kriskristofferson.com", "Fr., 15.11.2021", "20:00", 58.50, [2021, 09, 23, 12, 30]);
var E2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/lenny.jpg", "lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80, [2021, 09, 23, 12, 30]);
//Array with Objekts
var cards = [L1, L2, R1, R2, E1, E2];
//Array with classes
var x = document.getElementsByClassName("card");
//Loop Display
for (var i = 0; i < cards.length; i++) {
    x[i].innerHTML += cards[i].display();
}
//Adding date/time property
