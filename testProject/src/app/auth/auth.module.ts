import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        LoginComponent
    ],
    exports:[ BrowserModule, LoginComponent],
    providers: [],
    bootstrap: [],
})

export class AuthModule {}