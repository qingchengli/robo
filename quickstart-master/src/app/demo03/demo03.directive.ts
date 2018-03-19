import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({ selector: '[test2]' })
export class Demo03Directive {
    constructor(private e:ElementRef) {
        console.log(e);
     }
     ngOnInit() {
        this.e.nativeElement.style.color="#00c3c3";
     }
     
}