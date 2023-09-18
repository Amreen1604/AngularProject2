import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  public bgclr !:string;
 public margin : string = '20px'

  constructor() { }

  ngOnInit(): void {
  }

  public bgColor1(){
  return this.bgclr = 'pink';
  
  }

  public padding(){
   return  "10px"
  }
  public bgColor2(){
    return this.bgclr = 'brown';
    
    }
}




// Directive

//Directive which gives instructions to DOM.

// instruction means >>if event has to bind we use javascript event binding 
                    // >> if on button background color has to apply we use CSS
                    //instructions related to look & feel or functionality
                    //how the element should look.what should happen on button click.

// Directive >>
// Component directve
//attribut directive   >> [ngStyle]
// structural directive
//ng-template
//ng-component
//ng-container
//ng-content
//router-outlet              




//1. Attribut Directive >> to give inline css >>  [ngStyle] = "{CSSpropertyName : value}"
//value can be hard coded or can be pass through ts file using property (field) or method(function).