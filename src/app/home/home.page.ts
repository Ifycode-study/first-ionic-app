import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public text: string = '';
  public toggle: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.getOrChangeTextContent(false);
  }

  onButtonClick() {
    this.getOrChangeTextContent(true);
  }

  getOrChangeTextContent(btnClicked: boolean) {
    const toggleValue: number = btnClicked ? this.onOffToggle() : 0;
    const textContent = toggleValue === 0 ? 'Default Text...': 'Text no longer at default!';
    this.text = `Toggle: ${ toggleValue }, Text content: ${textContent};`;
  }

  onOffToggle() {
    this.toggle >= 1 ? this.toggle = 0 : this.toggle = 1;
    return this.toggle;
  }
}
