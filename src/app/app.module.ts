import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ColorPickerModule } from "ngx-color-picker";
import { AppTheme } from "./core/app-theme.service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CardComponent } from "./card/card.component";
import { CardImageComponent } from "./card-image/card-image.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardImageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ColorPickerModule,
  ],
  providers: [AppTheme],
  bootstrap: [AppComponent],
})
export class AppModule {}
