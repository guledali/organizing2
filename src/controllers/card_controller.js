import { Controller } from "stimulus"

export default class extends Controller {
    static targets = ['name'];

    initialize() {
        //guled
        const name = document.querySelector('.card-title').getAttribute("data-name");
        if (this.titleName === null) {
            this.readName(name);
        } else {
            this.readName(this.titleName);
        }
    }

    get titleName() {
      return this.data.get("name")
    }

    set titleName(value) {
        this.data.set("name", value)
    }

    greet(e) {
        e.preventDefault()
        const name = this.nameTarget.value;

        // updating the state with value from input 
        this.titleName = name


        // update the ui
        this.readName(this.titleName)
    }
    
    readName(name) {
        const cardName = document.querySelector(".card-title");
        cardName.textContent = name
    }
}