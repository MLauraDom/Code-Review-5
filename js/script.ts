class Locations {
    name:string;
    city:string;
    zip:number;
    adress:string;
    image: string;
    constructor(name:string, city:string, zip:number, adress:string, image:string){
    this.name = name;
    this.city = city;
    this.zip = zip;
    this.adress = adress;
    this.image = image;
    }
    display(){
        return  `
        <img src="${this.image}" class="card-img-top" alt="${this.name}">
        <div class="card-body">
          <h4 class="card-title">${this.name}</h4>
          <p class="card-text">Adress:  ${this.adress} , ${this.zip}  ${this.city}</p>
        </div>
      `
}
}
class Restaurant extends Locations {
    cuisine: string;
    telefon: string;
    web: string;
    constructor(name:string, city:string, zip:number, adress:string, image:string, cuisine:string, telefon:string, web:string){
            super(name, city, zip, adress, image);
            this.cuisine = cuisine;
            this.telefon = telefon;
            this.web = web;
        };
        display(){
            return `${super.display()}
            
              <p class="h6 card-text">Telefon:  ${this.telefon}<br/>Website: ${this.web}</p>
          `
          };
        
}
class Events extends Locations {
    event: string;
    web: string;
    date : string;
    time : string;
    price : number;
    constructor(event: string, name:string, city:string, zip:number, adress:string, image:string, web:string, date:string, time:string, price:number){
            super(name, city, zip, adress, image);
            this.event = event;
            this.web = web;
            this.date = date;
            this.time = time;
            this.price = price;
        }
        display(){
            return `
            <img src="${this.image}" class="card-img-top" alt="${this.name}">
            <div class="card-body">
              <h5 class="card-title">${this.event}</h5>
              <h6 class="card-title">${this.name}</h6>
              <p class="card-text">Adress:  ${this.adress} , ${this.zip}  ${this.city}</p>
              <p class="card-text">On ${this.date} at ${this.time}</p>
              <p class="h4">Price: € ${this.price}</p>
              <p class="h6">${this.web}</p>
            </div>
          `
          };
    }

let L1 = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg");
let L2 = new Locations("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
let R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.png", "Thai Restaurant", "+43(1)5812308", "www.lemonleaf.at");
let R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/scho.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "http://www.sixta-restaurant.at/");
let E1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/kris.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021", "20:00", 58.50);
let E2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/lenny.jpg", "www.lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80);

var cards : Array<object> = [L1, L2, R1, R2, E1, E2];
var x : Array<HTMLElement> = document.getElementsByClassName("card");
for (let i:number = 0; i<cards.length; i++) {
  x[i].innerHTML += cards[i].display();
}
