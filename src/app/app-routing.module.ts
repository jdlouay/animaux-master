import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { animalGuard } from './animal.guard';
import { ListeGroupesComponent } from './liste-groupes/liste-groupes.component';


 // Assurez-vous que l'import est correct

const routes: Routes = [
  { path: "animaux", component: AnimauxComponent },
  
  { path: "rechercheParGroupe", component: RechercheParGroupeComponent },
  { path: "rechercheParNom", component: RechercheParNomComponent},
  {path: 'login', component: LoginComponent},
  {path:'register',component:RegisterComponent},
  {path : "add-animal", component : AddAnimalComponent, canActivate:[animalGuard]},
  { path: 'listeGroupes', component: ListeGroupesComponent }, // Route pour afficher la liste des groupes

  {path: 'app-forbidden', component: ForbiddenComponent},
  { path: 'updateAnimal/:id', component: UpdateAnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }