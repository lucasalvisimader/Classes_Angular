import { Component, Input } from "@angular/core";

@Component ({
    selector: 'app-botao',
    templateUrl: './botao.component.html'
})

export class BotaoComponent { 

    @Input ()
    textoBotao: String = ""

    @Input ()
    altura: String = ""

    @Input ()
    largura: String = ""
}