import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'son',
    template: `<h3>这是子组件{{myValue}}</h3>
                <button (click)='ask()'>问候</button>
    `
})

export class SonComponent implements OnInit {
    demop05Name:any;
    @Input() myValue:any;
    @Output() toFatherEvent=new EventEmitter();
    constructor() {
        this.demop05Name='是钱吗老爹'
     }

    ngOnInit() { }
    ask(){
       this.toFatherEvent.emit(this.demop05Name);
    }
}