import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'demo01',
    templateUrl: './demo01.component.html'
})

export class Demo01Component implements OnInit {
    name:string;
    age:number;
    uName:string;
    constructor() { 
       this.name='jjj';
       this.age=20;
       this.uName="张三";
    }
    ngOnInit() { 
        alert('正在初始化');
    }
    // 定义点击事件
    handleClick(){
        alert('有本事再点一下');
    }
    ngChange(msg:any){
        console.log(msg);
    }
}