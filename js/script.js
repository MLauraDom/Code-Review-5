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
var Locations = /** @class */ (function () {
    function Locations(name, city, zip, adress, image) {
        this.name = name;
        this.city = city;
        this.zip = zip;
        this.adress = adress;
        this.image = image;
    }
    Locations.prototype.display = function () {
        return "\n        <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">" + this.name + "</h4>\n          <p class=\"card-text\">Adress:  " + this.adress + " , " + this.zip + "  " + this.city + "</p>\n        </div>\n      ";
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, zip, adress, image, cuisine, telefon, web) {
        var _this = _super.call(this, name, city, zip, adress, image) || this;
        _this.cuisine = cuisine;
        _this.telefon = telefon;
        _this.web = web;
        return _this;
    }
    ;
    Restaurant.prototype.display = function () {
        return _super.prototype.display.call(this) + "\n            \n              <p class=\"h6 card-text\">Telefon:  " + this.telefon + "<br/>Website: " + this.web + "</p>\n          ";
    };
    ;
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(event, name, city, zip, adress, image, web, date, time, price) {
        var _this = _super.call(this, name, city, zip, adress, image) || this;
        _this.event = event;
        _this.web = web;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    Events.prototype.display = function () {
        return "\n            <img src=\"" + this.image + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.event + "</h5>\n              <h6 class=\"card-title\">" + this.name + "</h6>\n              <p class=\"card-text\">Adress:  " + this.adress + " , " + this.zip + "  " + this.city + "</p>\n              <p class=\"card-text\">On " + this.date + " at " + this.time + "</p>\n              <p class=\"h4\">Price: \u20AC " + this.price + "</p>\n              <p class=\"h6\">" + this.web + "</p>\n            </div>\n          ";
    };
    ;
    return Events;
}(Locations));
var L1 = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg");
var L2 = new Locations("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
var R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.png", "Thai Restaurant", "+43(1)5812308", "www.lemonleaf.at");
var R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/scho.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "http://www.sixta-restaurant.at/");
var E1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/kris.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021", "20:00", 58.50);
var E2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/lenny.jpg", "www.lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80);
var cards = [L1, L2, R1, R2, E1, E2];
var x = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
    x[i].innerHTML += cards[i].display();
}
