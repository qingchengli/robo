import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'demo07_2',
    template: `<button (click)='ask()'>hello<button>`
})

export class Demo072Component implements OnInit {
     @Output() toYou=new EventEmitter();
    constructor() { }

    ngOnInit() { }
    ask(){
        this.toYou.emit('老爹,我没钱了');
    }
}