import { Component, OnInit } from '@angular/core';
import Animal from '../model/animal.model';
import { AnimalService } from '../services/animal.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-animaux',
  templateUrl: './animaux.component.html',
})
export class AnimauxComponent implements OnInit {
  animaux: Animal[]; // Un tableau d'objets Animal

  constructor(private animalService: AnimalService , public authService:AuthService) {
    this.animaux = animalService.listeAnimaux(); // Récupère la liste des animaux via le service
  }

  ngOnInit(): void {}

  // Ajoutez cette méthode pour supprimer un animal
  supprimerAnimal(animal: Animal) {
    const conf = confirm("Êtes-vous sûr de vouloir supprimer cet animal ?");
    if (conf) {
      this.animalService.supprimerAnimal(animal);
    }
  }
}
