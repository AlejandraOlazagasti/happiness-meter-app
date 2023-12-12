import { Component } from "@angular/core";
import { ToolbarComponent } from "./components";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "happiness-meter";
}
