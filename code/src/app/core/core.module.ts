import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ShellService } from './services/shell.service';
@NgModule({
  providers: [
    ShellService,
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule已经加载。只在AppModule中导入它');
    }
  }
}
