//Class Locations
class Locations {
    constructor(public name:string, public city:string, public zip:number, public adress:string, public image:string, public date:number[]){}
    display1(){ 
        return `
        <img src="${this.image}" class="card-img-top" alt="${this.name}"><div class="card-body m-auto p-2">`
    }
    display2(){
        return  `
        
          <h5 class="card-title">${this.name}</h5>`
    }
    display3(){
        return `
          <p class="card-text"><b>Address:</b>  ${this.adress} , ${this.zip}  ${this.city}</p>
      `
    }
    display10() {
        return `<p>Created on  ${this.date[2]}.${this.date[1]}.${this.date[0]} at ${this.date[3]}:${this.date[4]}</p></div>`
    }

    display(){
        return this.display1() + this.display2() + this.display3() + this.display10();
    }

}
//Class Restaurant
class Restaurant extends Locations {
    constructor(public name:string, public city:string, public zip:number, public adress:string, public image:string, public cuisine:string, public telefon:string, public web:string, public date:number[]){
        super(name, city, zip, adress, image, date)
        }
        display4(){
            return `
                <div class="p-2"><p>${this.cuisine}</p>`
        }
        display5(){
            return `  <p class="card-text"><b>Telefon:</b> ${this.telefon}<br/><b>Website:</b> ${this.web}</p></div
            `
        }

        display(){
            return super.display1()+ super.display2() + this.display4() + super.display3() + this.display5() + super.display10();
        }
}

//Class Event
class Events extends Locations {
    constructor(public event: string, public name:string, public city:string, public zip:number, public adress:string, public image:string, public web:string, public day:string, public time:string, public price:number, public date:number[]){
            super(name, city, zip, adress, image, date);
        }
        display6(){
            return `
              <h4 class="card-title">${this.event} Concert</h4>`
        }
        display7(){
            return `<p class="h5 text-primary text-center"> On ${this.day} at ${this.time}</p>`
        }

        display8(){
            return`<p><b>Webseite:</b> ${this.web}</p>
            </div>`
        }
        display9(){
            return`<p class="h5 text-end text-success"> Price:  € ${(this.price).toFixed(2)}<p/>`
        }

        display(){
            return super.display1() + this.display6() + this.display7() + super.display2() + super.display3() + this.display8() + this.display9() + super.display10();
        }
}

//Creating the Objects

let L1 = new Locations("St. Charles Church", "Vienna", 1010, "Karlsplatz 1", "img/karlsplatz.jpg", [2021, 09, 23, 12, 30]);
let L2 = new Locations("Schönbrunner Zoo", "Vienna", 1130, "Maxingstraße 13b", "img/zoo.jpg", [2021, 09, 23, 12, 30]);
let R1 = new Restaurant("Lemon Leaf", "Vienna", 1050, "Kettenbrückengasse 19", "img/leaf.png", "Thai Restaurant", "+43(1)5812308", "lemonleaf.at", [2021, 09, 23, 12, 30]);
let R2 = new Restaurant("SIXTA", "Vienna", 1050, "Schönbrunner Straße 21", "img/scho.png", "Viennese Traditional Restaurant", "+43 1 58 528 56 l <br/> +43 1 58 528 56", "sixta-restaurant.at", [2021, 09, 23, 12, 30]);
let E1 = new Events("Kris Kristofferson", "Wiener Stadthalle, Halle F", "Vienna", 1150, "Roland Rainer Platz 1", "img/kris.jpg", "kriskristofferson.com", "Fr., 15.11.2021", "20:00", 58.50, [2021, 09, 23, 12, 30]);
let E2 = new Events("Lenny Kravitz", "Wiener Stadthalle - Halle D", "Vienna", 1150, "Roland Rainer Platz 1", "img/lenny.jpg", "lennykravitz.com", "Sat, 09.12.2029", "19:30", 47.80, [2021, 09, 23, 12, 30]);


//Array with Objekts

var cards : Array<any> = [L1, L2, R1, R2, E1, E2];

//Array with classes
var x : Array<HTMLElement> = document.getElementsByClassName("card");

//Loop Display

for (let i:number = 0; i<cards.length; i++) {
  x[i].innerHTML += cards[i].display();
}

//Adding date/time property
