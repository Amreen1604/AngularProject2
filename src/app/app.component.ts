import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myFirstApp1'; //property or field
  
  hello(){      //method()
    console.log('hello')
  }
}




// life cylce hook
 
//comp has some life cycle.life cycle means stages
// life cylce hook means component initialize, update, & destroye.
//initialize >> comp comes or render in UI or view
//destroye >> comp removes from UI or view
//from comp initialze to destroy there is some life stages called as life cylce hook.
//for every stage there is some function
//when comp initialize first of all ngOnInit(){} method is called  >>> OnInit > On Initalize
// An ngOnInit() is a good place for a component to fetch its initial data.
// The ngOnChanges() method is your first opportunity to access those properties. Angular calls ngOnChanges() before ngOnInit(), but also many times after that. It only calls ngOnInit() once.
//the code or function have to initialize in UI or view will be written in ngOnInit() method or when the comp initialize & after its initialization the code or functionality have to execute will be written in ngOnInit() method

// An interface that allows you to tap into the lifecycle of directives and components as they are created, updated, and destroyed.

// Each interface has a single hook method whose name is the interface name prefixed with ng. For example, the OnInit interface has a hook method named ngOnInit().

                    // className          //interfaceNAme
// export class AppComponent implements OnInit{
//   public fName : string = "Jhon";
//   public lName : string = "Doe";
//                                       //industry standard >> the sequence should be like this >>1st> properties or field 2nd > constructor method 3rd > methods
//                                       //always use properties above constructor & methods below constructor 
//                                       //OnInit is an interface >>here class is using interface as type
//                                       //interface OnInit  has a hook method ngOnInit() which is mandetory to write in a class otherwise it throws error
//   constructor (){

//   }
              //hookMethodName
//   public ngOnInit() : void{   //when function does not return anything its return type is void
// console.log('comp is initialized')
//   }

// }

//when we use(implements) interface as a type on class ,interface has some  methods in it and those method should be used(write) (mandetory to use) in a class .otherwise throws error

//Angular runs these hook methods in the following order:

// HOOK METHOD   >> 	DETAILS
// 1	ngOnChanges	>> When an input or output binding value changes.
// 2	ngOnInit	>> After the first ngOnChanges.
// 3	ngDoCheck	 >> Developer's custom change detection.
// 4	ngAfterContentInit	>> After component content initialized.
// 5	ngAfterContentChecked	>> After every check of component content.
// 6	ngAfterViewInit	>> After the views of a component are initialized.
// 7	ngAfterViewChecked	>> After every check of the views of a component.
// 8	ngOnDestroy	>> Just before the directive is destroyed.