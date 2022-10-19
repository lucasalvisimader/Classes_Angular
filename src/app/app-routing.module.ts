import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { ClickerComponent } from "./pages/home/clicker/clicker.component";
import { InputsComponent } from "./pages/home/inputs/inputs.component";
import { LlamasComponent } from "./pages/home/llamas/llamas.component";
import { MoreLlamasComponent } from "./pages/home/more-llamas/more-llamas.component";

const routes: Route[] = [
    {
        path: 'llamas',
        component: LlamasComponent
    },
    {
        path: 'more-llamas',
        component: MoreLlamasComponent
    },
    {
        path: 'clicker',
        component: ClickerComponent
    },
    {
        path: "inputs",
        component: InputsComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }