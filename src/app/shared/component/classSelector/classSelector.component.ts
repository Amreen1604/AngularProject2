import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";




@Component({
    selector : '.app-classSelector',
    templateUrl : './classSelector.component.html',

//     template : `
//             <div class="container">
//     <div class="row">
//         <div class="col-sm-12">
//             <div class="para">
//                 <p> custome HTML element is created by using class selector <strong>selector:'.app-classSelector'</strong></p>
//                 <p>I'm {{fName}} {{lName}} from Mumbai.</p>
//             </div>
//         </div>
//     </div>
// </div>
//     `,

    styleUrls : ['./classSelector.component.scss']

//     styles : [`
//        .para> p{
//     background-color: aquamarine;
//     padding: 20px;
//     margin: 20px;
// }
//    `]
})
export class ClassSelectorComponent implements OnInit{

    public fName : string = "May";
    public lName : string = "Doe";
    

    constructor(){

    }
    public ngOnInit(): void {
        
    }
}