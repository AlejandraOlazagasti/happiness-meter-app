import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { ToolbarComponent } from "./components";

@NgModule({
  imports: [BrowserAnimationsModule, AppRoutingModule, ToolbarComponent],
  providers: [],
})
export class AppModule {}
