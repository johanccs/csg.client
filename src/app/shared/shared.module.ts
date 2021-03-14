import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ComponentHeaderComponent } from './component-header/component-header.component';
import { SubSectionHeaderComponent } from './sub-section-header/sub-section-header.component';
import { SectionHeaderBlackComponent } from './section-header-black/section-header-black.component';

@NgModule({
  declarations: [
    SectionHeaderComponent,
    SectionHeaderBlackComponent,
    ComponentHeaderComponent,
    SubSectionHeaderComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SectionHeaderComponent,
    SectionHeaderBlackComponent,
    ComponentHeaderComponent,
    SubSectionHeaderComponent
  ]
})
export class SharedModule { }
