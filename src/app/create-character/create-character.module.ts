import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CreateCharacterComponent } from "./create-character.component";

const routes = [
    {path:'', component: CreateCharacterComponent},
  ];


@NgModule({
    declarations:[CreateCharacterComponent],
    imports:[
        // BrowserModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forChild(routes)
    ],
    exports:[

    ]
})
export class CreateCharacterModule{}