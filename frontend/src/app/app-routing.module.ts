import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableLocaisComponent } from './view/table-locais/table-locais.component'

const routes: Routes = [{
  path : "teste",
  component: TableLocaisComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ]
})
export class AppRoutingModule { }
