import { NgModule } from '@angular/core';
import { MoneyPipe } from './money/money';
@NgModule({
	declarations: [MoneyPipe,
    MoneyPipe],
	imports: [],
	exports: [MoneyPipe,
    MoneyPipe]
})
export class PipesModule {}
