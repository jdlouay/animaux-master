import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../services/animal.service';  // Service pour gérer les animaux
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import { Groupe } from '../model/groupe.model';  // Modèle Groupe
import Animal from '../model/animal.model';

@Component({
  selector: 'app-update-animal',
  templateUrl: './update-animal.component.html',
})
export class UpdateAnimalComponent implements OnInit {
  currentAnimal: Animal = new Animal();  // L'animal à modifier
  groupes!: Groupe[];  // Liste des groupes disponibles
  updatedGroupeId!: number;  // ID du groupe sélectionné
  animalForm!: FormGroup;  // Reactive Form

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private animalService: AnimalService,
    private formBuilder: FormBuilder  // Inject FormBuilder
  ) {}

  ngOnInit(): void {
    // Fetch available groupes
    this.groupes = this.animalService.listeGroupes();
  
    // Get the current animal based on the ID from the URL
    this.currentAnimal = this.animalService.consulterAnimal(this.activatedRoute.snapshot.params['id']);
  
    // Initialize the Reactive Form with default values and validators
    this.animalForm = this.formBuilder.group({
      nomAnimal: [this.currentAnimal.nomAnimal, Validators.required],
      especeAnimal: [this.currentAnimal.especeAnimal, Validators.required],
      dateNaissance: [this.currentAnimal.dateNaissance, Validators.required],
      groupe: [this.currentAnimal.groupe.idGroupe, Validators.required],
      email: [this.currentAnimal.email, [Validators.required, Validators.email]], // Added email field
    });
  
    // Initialize the selected group ID
    this.updatedGroupeId = this.currentAnimal.groupe.idGroupe;
  }

  // Method to update the animal using the service
  updateAnimal(): void {
    if (this.animalForm.valid) {
      // Merge form data into currentAnimal
      const updatedAnimal: Animal = {
        ...this.currentAnimal,
        ...this.animalForm.value,
        groupe: this.animalService.consulterGroupe(this.animalForm.value.groupe),
      };

      // Update the animal via the service
      this.animalService.updateAnimal(updatedAnimal);

      // Navigate back to the list of animals
      this.router.navigate(['animaux']);
    }
  }
}