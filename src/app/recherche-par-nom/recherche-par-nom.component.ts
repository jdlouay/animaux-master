import { Component, OnInit } from '@angular/core';
import Animal from '../model/animal.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.css'
})
export class RechercheParNomComponent implements OnInit {

  nomAnimal! : string;
  animaux!: Animal[];
  allAnimaux!: Animal[];
  searchTerm!: string;
  
  constructor(private animalService : AnimalService) { }

  ngOnInit(): void {
    this.animaux = this.animalService.listeAnimaux();
    console.log(this.animaux); // Logs the animals array


      
  }

  // rechercherProds(){
  //   this.animalService.rechercherParNom(this.nomAnimal).
  //   subscribe(animx => {
  //     console.log(animx);
  //     this.animaux=animx;});
  // }

  onKeyUp(filterText : string){
    this.animaux = this.allAnimaux.filter(item =>
    item.nomAnimal.toLowerCase().includes(filterText));
    }
    

}
