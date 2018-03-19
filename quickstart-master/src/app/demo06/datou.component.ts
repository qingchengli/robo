import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'datou',
    template: `<xiaotou [myValue]="money" (toRcv)='farfun($event)' (rcvSon)=''></xiaotou>`
})

export class DatouComponent implements OnInit {
    money:any='传家宝';
    constructor() { }
    farfun(msg:any){
        console.log("儿子的信息:"+msg);
    };
    ngOnInit() { }
} 