import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimauxComponent } from './animaux/animaux.component';
import { AddAnimalComponent } from './add-animal/add-animal.component';
import { UpdateAnimalComponent } from './update-animal/update-animal.component';
import { RechercheParGroupeComponent } from './recherche-par-groupe/recherche-par-groupe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { FilterPipe } from './filter.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';


// Importation du composant UpdateAnimal

@NgModule({
  declarations: [
    AppComponent,
    AnimauxComponent,
    AddAnimalComponent,
    UpdateAnimalComponent,
    RechercheParGroupeComponent,
    RechercheParGroupeComponent,
    RechercheParNomComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
   

   // Déclaration du composant UpdateAnimal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
