import { Component } from "@angular/core";

@Component({
    selector: 'clicker',
    templateUrl: './clicker.component.html'
})

export class ClickerComponent { 
    cont = 0;
    party: String;
    counting(): void {
        this.cont++;
        if (this.cont % 100 === 0) {
            this.party = "lightgreen";
        } else if (this.cont % 10 === 0) {
            this.party = "violet";
        } else if (this.cont % 2 === 0 && this.cont % 7 === 0) {
            this.party = "lightblue";
        } else {
            this.party = this.cont % 3 === 0 ? "lightyellow" : "lightpink";
        }
    }
}