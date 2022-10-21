import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BotaoComponent } from "./botao/botao.component";
import { InputsComponent } from "./inputs.component";

@NgModule ({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        InputsComponent,
        BotaoComponent
    ]
})

export class InputsModule {

}