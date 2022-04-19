import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-card-image",
  templateUrl: "./card-image.component.html",
  styleUrls: ["./card-image.component.scss"],
})
export class CardImageComponent implements OnInit {
  @Input("src")
  imageUrl: string;

  constructor() {}

  ngOnInit() {}
}
