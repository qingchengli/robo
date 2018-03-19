import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo07_1',
    template: `<demo07_2 (toYou)='fun($event)'></demo07_2>`
})

export class Demo07Component implements OnInit {
    constructor() { }

    ngOnInit() { }
    fun(msg:any){
        console.log(`我儿子的消息是:${msg}`)
    }
}