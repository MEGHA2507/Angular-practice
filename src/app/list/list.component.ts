import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() characters;
  @Output() sideEmit = new EventEmitter<{name:string, side:string}>();

  constructor() { }

  ngOnInit() {
  }

  onSideAssign(charInfo){
    this.sideEmit.emit(charInfo);
  }

}
