class Locations{
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
    this.image =image;
    }
    display(){
        return  `<a class="destination d-flex align-items-end bg-center bg-cover" style="background: url(${this.image})">
        <div class="destination-inner w-100 text-center text-white index-forward has-transition">
        <p class="small text-uppercase mb-0">${this.city}</p>
        <h2 class="h3 mb-4">${this.name}</h2>
        <div class="btn btn-primary btn-block destination-btn text-white">Discover</div>
        </div></a>`
      };
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
    }

let L1 = new Location("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg");
let L2 = new Location("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg");
let R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.jpg", "Thai Restaurant", "+43(1)5812308", "www.lemonleaf.at");
let R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/sho.jpg", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "http://www.sixta-restaurant.at/");
let E1 = new Event("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/sho.jpg", "http://kriskristofferson.com/", "Fr., 15.11.2021", "20:00", 58.50);
let E2 = new Event("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/sho.jpg", "www.lennykravitz.com/", "Sat, 09.12.2029", "19:30", 47.80);

var cards : Array<object> = [L1, L2, R1, R2, E1, E2];

for (let val of cards) {
  (document.getElementById("travel")as HTMLElement).innerHTML += val.display();
}
