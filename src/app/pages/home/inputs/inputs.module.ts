import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BotaoComponent } from "./botao/botao.component";
import { InputsComponent } from "./inputs.component";

@NgModule ({
    imports: [
        CommonModule
    ],
    declarations: [
        InputsComponent,
        BotaoComponent
    ]
})

export class InputsModule {

}