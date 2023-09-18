import {OnInit, Component } from "@angular/core";



@Component({
    selector: 'app-TwoWayDataBinding',
    templateUrl : './twoWayDataBinding.component.html',
    styleUrls : ['./twoWayDataBinding.component.scss']
})
export class TwoWayDataBindingComponent implements OnInit{

    public productStatus = 'No product is Added to the cart yet!!'
    public isDisabled = true;
    public count :number = 0;
    public searchProductName !:string;
    public searchProduct1 !:string ;
    public searchProduct2 :string ="no product is Searched yet.";

    constructor(){

    }

    ngOnInit(): void {
        
    }

    onProductSearch(eve:Event){
        let val = (eve.target as HTMLInputElement).value;
        if(val.length > 0){
            this.isDisabled = false
        }else{
            this.isDisabled = true;
        }
    }

   
    onSearchProduct(){
        if(this.searchProductName.length>0){
            this.isDisabled= false;
        }else{
            this.isDisabled= true;
        }
       
    }
  
}


// [(ngModel)] is a directive .directive means which gives instructions to DOM 
//[(ngModel)] is used to tranfer data from HTML to ts & again transfer of data from ts to HTML .its a two way data binding.[()]
// to use [(ngModel)] in index.html first of all we need to  register    FormsModule in app.module.ts 

//in index.html 
// [(ngModel)]= "propertyName(declared in ts)"
// <p class="alert alert-danger" [innerHTML]="propertyName(declared in ts)">

//         </p>

//in app.module.ts file >> 

// import { FormsModule } from '@angular/forms';

// @NgModule({
//     declarations: [
//       AppComponent
//     ],
//     imports: [
//       BrowserModule,
//       FormsModule,
//       AppRoutingModule
//     ],
//     providers: [],
//     bootstrap: [AppComponent]
//   })
//   export class AppModule { }
  
