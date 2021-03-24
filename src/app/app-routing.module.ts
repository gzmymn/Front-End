import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:ProductComponent}, //pathMatch:"full" bu bizim anasayfamıza eşit olacak başka şeyler gelirse hesaba katma demek
  {path:"products", component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent}

]; //buraya yazdığım route'lar router-outlet'te ne göstereyim'in karşılığı

@NgModule({
  imports: [RouterModule.forRoot(routes)], //uygulamamız için bu route'ları devreye al
  exports: [RouterModule]
})
export class AppRoutingModule { }
