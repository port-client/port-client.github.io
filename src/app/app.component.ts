import { Component } from '@angular/core';
import { AppTheme } from './core/app-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'port-client';
  defaultColor: any = '#000000';

  constructor(private themeService: AppTheme) {}

  ngOnInit(): void {
    this.themeService.changeTheme('#700C16');
  }
}
