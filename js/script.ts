//Class Locations
class Locations {
    constructor(public name:string, public city:string, public zip:number, public adress:string, public image:string, public date:Date){}
    display1(){ 
        return `
        <div class="card p-0 shadow-lg bg-body rounded m-1"><img src="${this.image}" class="card-img-top" alt="${this.name}" />`
    }
    display2(){
        return  `
        
          <h4 class="card-header text-center">${this.name}</h4><div class="card-body p-2">`
    }
    display3(){
        return `
          <p class="card-text"><b>Address:</b>  ${this.adress} , ${this.zip}  ${this.city}</p>
      `
    }
    display10() {
        return `</div><div class="card-footer text-center"><p class="h6">Created on  ${this.date.toUTCString()}</p></div></div>`
    }

    display(){
        return this.display1() + this.display2() + this.display3() + this.display10();
    }

}
//Class Restaurant
class Restaurant extends Locations {
    constructor(public name:string, public city:string, public zip:number, public adress:string, public image:string, public cuisine:string, public telefon:string, public web:string, public date:Date){
        super(name, city, zip, adress, image, date)
        }
        display4(){
            return `
                <p>${this.cuisine}</p>`
        }
        display5(){
            return `  <p class="card-text"><b>Telefon:</b> ${this.telefon}<br/><b>Website:</b> ${this.web}</p>
            `
        }

        display(){
            return super.display1()+ super.display2() + this.display4() + super.display3() + this.display5() + super.display10();
        }
}

//Class Event
class Events extends Locations {
    constructor(public name: string, public event:string, public city:string, public zip:number, public adress:string, public image:string, public web:string, public day:string, public time:string, public price:number, public date:Date){
            super(name, city, zip, adress, image, date);
        }
        display6(){
            return `
              <h5 class="card-title">${this.event}</h5>`
        }
        display7(){
            return `<p class="h5 text-primary text-center"> Concert On ${this.day} at ${this.time}</p>`
        }

        display8(){
            return`<p><b>Webseite:</b> ${this.web}</p>`
        }
        display9(){
            return`<p class="h5 text-end text-success"> Price:  € ${(this.price).toFixed(2)}</p>`
        }

        display(){
            return super.display1() + super.display2() + this.display7() + this.display6() + super.display3() + this.display8() + this.display9() + super.display10();
        }
}

//creating the Dates
const a = new Date(1987, 8, 30, 5, 33, 30);
const b = new Date(2016, 1, 26, 16, 34, 30);
const c = new Date(2017, 11, 23, 7, 33, 25);
const d = new Date(2021, 9, 24, 8, 42, 30);
const e = new Date(2019, 7, 1, 16, 0, 30);
const f = new Date(2018, 3, 24, 10, 33, 30);

//Creating the Objects

let L1 = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg", a);
let L2 = new Locations("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg", b);
let R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.png", "Thai Restaurant", "+43(1)5812308", "lemonleaf.at", c);
let R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/scho.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "sixta-restaurant.at", d);
let E1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/kris.jpg", "kriskristofferson.com", "Fr., 15.11.2021", "20:00", 58.50, e);
let E2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/lenny.jpg", "lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80, f);


//Array with Objekts

var cards : Array<any> = [L1, L2, R1, R2, E1, E2];

//Array with classes
for (let i:number = 0; i<cards.length; i++){
(document.getElementById("travel") as HTMLElement).innerHTML += cards[i].display();
}

//Sort by Date

//Ascending

function sortA() {
    cards.sort((a, b) => a.date - b.date);
    (document.getElementById("travel")as HTMLElement).innerHTML = "";
    for (let i:number = 0; i<cards.length; i++) {
        (document.getElementById("travel")as HTMLElement).innerHTML += cards[i].display();
      }
  }
  
(document.getElementById("sortasc") as HTMLElement).addEventListener("click", function() {
    sortA();
    })

//Descending

function sortD() {
    cards.sort((a, b) => b.date - a.date);
    (document.getElementById("travel")as HTMLElement).innerHTML = "";
    for (let i:number = 0; i<cards.length; i++) {
        (document.getElementById("travel")as HTMLElement).innerHTML += cards[i].display();
      }
  }
  
(document.getElementById("sortdesc") as HTMLElement).addEventListener("click", function() {
    sortD();
    })