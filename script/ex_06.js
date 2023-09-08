
var texto = document.getElementById("text");
class Hero {
    constructor(name, clase, intelligence, force) {
        this.name = name;
        this.clase = clase;
        this.intelligence = intelligence;
        this.force = force;
    }
    toString()
    {
        return `Je suis ${this.name} le ${this.clase} ,j'ai ${this.intelligence} d'intelligence et ${this.force} de force!`;
    }
}
  
  var mage = new Hero("amadeus", "mage", 10, 3);
  var guerrier = new Hero("pontius", "guerrier", 3, 10);
 mage.toString();
guerrier.toString();

texto.innerHTML= `"${mage.toString()}<br>${guerrier.toString()}"`;
