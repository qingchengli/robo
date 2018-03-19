import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'father',
    template: `<son [myValue]='money' (toFatherEvent)="rcvMsg($event)"></son>`,
})
export class FatherComponent implements OnInit {
    money:any='传家宝';
    constructor() { }

    ngOnInit() { }
    rcvMsg(msg:any){
        console.log('儿子传来的信息是'+msg);
    }
}