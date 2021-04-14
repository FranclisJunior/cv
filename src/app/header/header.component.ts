import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isShrunk = false;

  constructor(private zone: NgZone) {
    this.zone = zone;
  }

  ngOnInit(): void {
    this.windowListener();
  }

  private windowListener(): void {
    window.onscroll = () => {
      this.zone.run(() => {
        this.isShrunk = window.pageYOffset > 0;
      });
    };
  }

}
