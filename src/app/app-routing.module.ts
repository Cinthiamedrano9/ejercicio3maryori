import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'midescripcionpersonal',
    loadChildren: () => import('./pages/midescripcionpersonal/midescripcionpersonal.module').then( m => m.MidescripcionpersonalPageModule)
  },
  {
    path: 'milugardenacimiento',
    loadChildren: () => import('./pages/milugardenacimiento/milugardenacimiento.module').then( m => m.MilugardenacimientoPageModule)
  },
  {
    path: 'mismetaspropuestas',
    loadChildren: () => import('./pages/mismetaspropuestas/mismetaspropuestas.module').then( m => m.MismetaspropuestasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
