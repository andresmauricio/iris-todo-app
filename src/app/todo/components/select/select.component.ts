import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Output() sendOption = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeOption(value: any) {
    this.sendOption.emit(value);
  }
}
