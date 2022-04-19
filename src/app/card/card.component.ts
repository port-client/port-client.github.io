import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Course } from "../model/course";
import { CardImageComponent } from "../card-image/card-image.component";
import { read } from "fs";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent implements OnInit, AfterViewInit {
  @Input()
  course: Course;

  @Input()
  noImgTemplate: TemplateRef<any>;

  @Input()
  cardIndex: number;

  @Output("courseSelected")
  courseEmittor = new EventEmitter<Course>();

  @ContentChild(CardImageComponent, { static: false, read: ElementRef })
  image: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.image);
  }

  onCourseViewed() {
    // console.log("inside click");

    this.courseEmittor.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClass() {
    return {
      beginner: this.course.category == "BEGINNER",
    };
  }

  getCardBg() {
    return {
      "background-image": "url( " + this.course.iconUrl + " )",
    };
  }
}
