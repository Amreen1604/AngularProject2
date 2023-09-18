import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { ListComponent } from './shared/component/list/list.component';
import { FormComponent } from './shared/component/form/form.component';
import {ImageComponent} from './image/image.component'
import { FooterComponent } from './shared/component/footer/footer.component';
import { PropertyBindingComponent } from './shared/component/propertyBinding/propertyBinding.component'
import { DirectiveSelectorComponent } from './shared/component/directiveSelector/directiveSelector.component';
import { ClassSelectorComponent } from './shared/component/classSelector/classSelector.component';
import {IsDisabledComponent} from './shared/component/isDisabled/isDisabled.component'
import { DummyComponent } from './dummy/dummy.component';
import { EventBinding } from './shared/component/EventBinding/eventBinding.component';
import {TwoWayDataBindingComponent} from './shared/component/twoWayDataBinding/twoWayDataBinding.component';
import { DirectiveComponent } from './shared/component/directive/directive.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    FormComponent,
    ImageComponent,
    FooterComponent,
    PropertyBindingComponent,
    DirectiveSelectorComponent,
    ClassSelectorComponent,
    IsDisabledComponent,
    DummyComponent,
    EventBinding,
    TwoWayDataBindingComponent,
    DirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
