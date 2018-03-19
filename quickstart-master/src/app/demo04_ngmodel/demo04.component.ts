import { Component, OnInit ,ElementRef} from '@angular/core';

@Component({
    selector: 'demo04',
    template: `<input type='password' (ngModelChange)='onchange($event)' [(ngModel)]='uname'>
            <p>{{uname}}</p>
    `,
})
export class Demo04Component implements OnInit {
    uname:string
    constructor(private e:ElementRef) {
        this.uname='张三';
     }

    ngOnInit() { }
    onchange(msg:any){
        console.log(msg);
    }
    ngOnChanges() {
        //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        //Add '${implements OnChanges}' to the class.
        console.log(1);
        this.e.nativeElement.style.color="blue";
    }
}