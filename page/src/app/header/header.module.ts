import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SwitchToggleComponent } from './switch-toggle/switch-toggle.component';



@NgModule({
  declarations: [ToolbarComponent, SwitchToggleComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolbarComponent]
})
export class HeaderModule { }
