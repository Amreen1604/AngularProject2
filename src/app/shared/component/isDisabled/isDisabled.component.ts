import { Component, OnInit } from "@angular/core";



@Component({
    selector: "app-isDisabled",
    templateUrl : './isDisabled.component.html',
    styleUrls : ['./isDisabled.component.scss']
})
export class IsDisabledComponent implements OnInit{
    public isDisabled : boolean = true;

    constructor(){

    }
    ngOnInit(){
        setTimeout(() => {
            this.isDisabled = !this.isDisabled;

        }, 5000);
    }

    public onKeyUp(eve :Event){
       console.log(eve);   //represents event
       console.log(eve.target); //represents the doc obj on which event is bind
       console.log((eve.target as HTMLInputElement).value); //represents the value entered by user
       eve.target
    }
    public onClick(eve:any){
        // eve.target.remove('disabled')
    }
}