import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent}, //pathMatch:"full" bu bizim anasayfamıza eşit olacak başka şeyler gelirse hesaba katma demek
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent}

]; //buraya yazdığım route'lar router-outlet'te ne göstereyim'in karşılığı

@NgModule({
  imports: [RouterModule.forRoot(routes)], //uygulamamız için bu route'ları devreye al
  exports: [RouterModule]
})
export class AppRoutingModule { }
