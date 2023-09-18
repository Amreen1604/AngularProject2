import { Component, OnInit } from "@angular/core";


@Component({
    selector : 'app-eventBinding',
    templateUrl :"./eventBinding.component.html",
    styleUrls : ['./eventBinding.component.scss']
})
export class EventBinding implements OnInit{
    public productStatus : string ='*No product is added yet.';
    public disabled : boolean = true;
    public noOfProductsCount :number = 0;
    public ProductSearch !:string ;   //value is not assigned now thats why using !

    constructor(){

    }
    public ngOnInit(): void {
      
    }

/////////////////////////////////////////////////

   public onKeyUp(eve:Event){
            console.log(eve);  //represents Event
            console.log(eve.target);   //represents the doc obj on which event is bind
          let val = (eve.target as HTMLInputElement).value;  //represents the value entered by user
          console.log(val); 
          if(val.length > 0){
               this.disabled = false
               }else{
                this.disabled = true
               }   //on keyup or input event dont use this.disabled = !this.disabled always use true or false
        // (eve.target as HTMLInputElement).value.reset()
        // (eve.target as HTMLInputElement).onreset   
    }

    //////////////////////////////////////////////

   public onsubmitHandler(eve : SubmitEvent){
    eve.preventDefault();
    console.log("submitted!!!");                    

    }

////////////////////////////////////////////////////

    public onProductAdd(){
        console.log("btn clicked");
       
        this.noOfProductsCount++;
    //   console.log(this.noOfProductsCount++);
        
           if(this.noOfProductsCount === 1){
            this.productStatus = `${this.noOfProductsCount} Product is added to the cart.`;
           }else{
            this.productStatus = `${this.noOfProductsCount} Products are added to the cart.`;
           }
       
        
    }

    ///////////////////////////////////////////////

    public onProductRemove(){
        
       this.noOfProductsCount--;
      

      
        if(this.noOfProductsCount < 1){
            this.productStatus = '*No product is added yet.';
        }else{
            this.productStatus = `${this.noOfProductsCount} Products are added to the cart.`
        }
        
        if(this.noOfProductsCount===1){
            this.productStatus = `${this.noOfProductsCount} Product is added to the cart.`;
        }
    }

/////////////////////////////////////////

    onProductSearch(eve:Event){

        let val = (eve.target as HTMLInputElement).value;
        this.ProductSearch = val; //the value entered by user will be stored in above declared property or field & that enterd value will be shown on Ui

        if(val.length>0){
            // this.disabled =!this.disabled;  // jitni baar key press hongi utni baar button disable enable hoga isi liye better hai true & false value use kre
            this.disabled =false;

        }else{
            this.disabled =true;
        }  
        
    }
   
}



