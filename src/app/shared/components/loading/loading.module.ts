import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { LoadingComponent } from './loading.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';

@NgModule({
  declarations: [LoadingComponent, LoadingOverlayComponent],
  imports: [CommonModule, OverlayModule],
  exports: [LoadingComponent, LoadingOverlayComponent],
})
export class LoadingModule {}
