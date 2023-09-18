import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";


@Component({
    // selector : 'app-directive', //tag selector
    selector : '[app-directiveSelector]',  //directive selector
    // selector : '.app-directive', //class selector 

    templateUrl : './directiveSelector.component.html',
    styleUrls : ["./directiveSelector.component.scss"],

    
//     template : `
//        <div class="container">
//     <div class="row ">
//         <div class="col-sm-12 ">
//           <div class="para">
             
//             <p >custom HTML element is created by using directive selector <strong>selector: '[app-attributeSelector]'</strong></p>
//             <p >I'm {{fName}} {{lName}} from Pune .</p>
            
//           </div>
//         </div>
//     </div>
//    </div>
//     `,

//     styles: [`
//   .para > p{
//     background-color : red;
//     color: #fff;
//     padding : 20px;
//     margin: 20px;
//     }
//     `]
} )

export class DirectiveSelectorComponent implements OnInit{

    public fName : string = "Jhon";
    public lName : string = "Doe";
    

    constructor(){

    }
    public ngOnInit(): void {
        
    }
}