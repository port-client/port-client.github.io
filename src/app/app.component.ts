import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { CardComponent } from "./card/card.component";
import { AppTheme } from "./core/app-theme.service";
import { COURSES } from "./core/db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit, OnInit, OnChanges {
  title = "port-client";
  defaultColor: any = "#000000";
  data = {
    title: "What you type is what you get.",
  };
  courses = COURSES;
  startDate = new Date(2000, 0, 1);
  heading = "tested";
  price = 9.9923322;
  rate = 0.67;

  @ViewChild("cardRef", { static: false, read: ElementRef })
  card: ElementRef;

  @ViewChild("container", { static: false })
  containerDiv: ElementRef;

  @ViewChildren(CardComponent, { read: ElementRef })
  cards: QueryList<CardComponent>;

  constructor(private themeService: AppTheme) {}

  ngAfterViewInit() {
    if (this.cards) {
      this.cards.changes.subscribe((cards) => {
        // console.log('reached',cards);
      });
    }
  }

  ngOnChanges() {}

  ngOnInit(): void {
    this.themeService.changeTheme("#700C16");
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  onCourseSelected(course: Course) {
    // console.log("card", this.card);
  }

  onCourseEdit(event: any) {
    this.courses.push({
      id: 1,
      description: "angulary",
      iconUrl:
        "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png",
      longDescription:
        "A detailed walk-through of the most important part of Angular - the Core and Common modules",
      category: "BEGINNER",
      lessonsCount: 10,
    });
    event.preventDefault();
  }
}
