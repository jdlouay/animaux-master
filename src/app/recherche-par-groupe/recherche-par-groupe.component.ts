import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service'; // Assurez-vous que le service est bien importé
// Importez votre modèle Animal
import { Groupe } from '../model/groupe.model'; // Importez votre modèle Groupe
import Animal from '../model/animal.model';

@Component({
  selector: 'app-recherche-par-groupe',
  templateUrl: './recherche-par-groupe.component.html',
  styleUrls: ['./recherche-par-groupe.component.css']
})
export class RechercheParGroupeComponent implements OnInit {
  animaux: Animal[] = []; // Liste des animaux
  IdGroupe: number = 0; // ID du groupe sélectionné
  groupes: Groupe[] = []; // Liste des groupes

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.groupes = this.animalService.listeGroupes(); 
  }

  // Méthode onChange pour rechercher les animaux par groupe
  onChange() {
    this.animaux = this.animalService.rechercherParGroupe(this.IdGroupe); 
  }

  // Méthode pour supprimer un animal
  supprimerAnimal(animal: Animal): void {
    const confirmation = confirm(`Voulez-vous vraiment supprimer l'animal ${animal.nomAnimal} ?`);
    if (confirmation) {
      this.animalService.supprimerAnimal(animal);
      this.animaux = this.animaux.filter(a => a.idAnimal !== animal.idAnimal); 
    }
  }
}
