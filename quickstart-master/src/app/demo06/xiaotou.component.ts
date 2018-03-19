import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'xiaotou',
    template: `<h2>{{myValue}}</h2><button (click)='ask()'>点他</button>`
})

export class XiaotouComponent implements OnInit {
    @Input() myValue:any='';
    @Output() toRcv=new EventEmitter(); 
    constructor() { }

    ngOnInit() { }
    ask(){
        this.toRcv.emit("老爸,我发财了");
    }
}