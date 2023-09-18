import { Component, OnInit } from "@angular/core";



@Component({
    selector : 'app-propertyBinding',
    templateUrl : './propertyBinding.component.html',
    styleUrls : ['./propertyBinding.component.scss']
})
export class PropertyBindingComponent implements OnInit{
public pName : string = "Samsung";
public pId : String = "CORE123";
public isDisabled : boolean = true  //by defalut it should be disabled

public fName : string = "jhon"

constructor(){

}


public ngOnInit(): void {
    setTimeout(() => {
        this.isDisabled = false
        //OR
        // this.isDisabled = !this.isDisabled

    }, 5000);
   
    
}

public getProductId(){
  return this.pId 
}
}



//In js when we select the html element by using gElementById the html element get converted to doc obj.& on that doc obj some properties are availbe i.e >> .innerHtml, .innerText, .textContent, .value , .disabled

// on doc obj some methods are also availbe i.e >> .add()  , .remove(), .addEventListner(), .getAttribute()

//property binding
//in js the property .innerHTML which is available on doc obj that will be use in angular as an attribute [innerHTML] = "propertyNameFromtsFile" or "methodORfunctionNameFromtsFile" also we can pass the default value by using string (single cot in double cot "' '") >>[innerHTML] = "'Iphone'"

//the properties is js .innerHTML, .innerText, .textContent , .value, .disabled which are available on doc obj only those properties use as property binding in angular.

//IQ
// what is the diffrence bet attribute & property
//attribute use on html  & property use on doc obj
//in angular html is dynamic thatswhy html elements become doc obj & properties can be bind.


//attribute eg >> class, id, alt, title >>>it  gives meta information of html elemt to browser