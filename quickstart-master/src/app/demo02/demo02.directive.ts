import { Directive,ElementRef,OnInit } from '@angular/core';

@Directive({ selector: '[test]' })
export class Testdirective implements OnInit {
    constructor(private el:ElementRef) {
        console.log(el);
     }
     ngOnInit(){
         this.el.nativeElement.style.color='#c3c3';
     }
}