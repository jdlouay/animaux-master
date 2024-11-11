import Animal from '../model/animal.model';
import { Groupe } from '../model/groupe.model';  // Import correct de la classe Groupe
import { Injectable } from '@angular/core';
 // Import correct de la classe Animal

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  groupes: Groupe[] = [
    { idGroupe: 1, nomGroupe: "Mammifères" },
    { idGroupe: 2, nomGroupe: "Oiseaux" }
  ];

  animaux: Animal[] = [
    {
      idAnimal: 1,
      nomAnimal: "Lion",
      especeAnimal: "Mammifère",
      dateNaissance: new Date("01/14/2010"),
      groupe: { idGroupe: 1, nomGroupe: "Mammifères" },
      email: "lion@example.com" // Added email field
    },
    {
      idAnimal: 2,
      nomAnimal: "Tigre",
      especeAnimal: "Mammifère",
      dateNaissance: new Date("03/05/2011"),
      groupe: { idGroupe: 1, nomGroupe: "Mammifères" },
      email: "tigre@example.com" // Added email field
    },
    {
      idAnimal: 3,
      nomAnimal: "Éléphant",
      especeAnimal: "Mammifère",
      dateNaissance: new Date("07/10/2015"),
      groupe: { idGroupe: 1, nomGroupe: "Mammifères" },
      email: "elephant@example.com" // Added email field
    }
  ];
  
  // Méthode pour retourner la liste des animaux
  listeAnimaux(): Animal[] {
    return this.animaux;
  }

  // Méthode pour ajouter un nouvel animal
  ajouterAnimal(animal: Animal): void {
    this.animaux.push(animal);
  }

  // Méthode pour consulter un animal par son ID
  consulterAnimal(id: number): Animal {
    return this.animaux.find(a => a.idAnimal == id)!;
  }

  // Méthode pour trier les animaux par ID
  trierAnimal(): void {
    this.animaux.sort((n1, n2) => n1.idAnimal - n2.idAnimal);
  }

  // Méthode pour mettre à jour un animal
  updateAnimal(animal: Animal): void {
    const index = this.animaux.findIndex(a => a.idAnimal == animal.idAnimal);
    if (index !== -1) {
      this.animaux[index] = animal;
      this.trierAnimal();
    }
  }

  // Méthode pour supprimer un animal
  supprimerAnimal(animal: Animal): void {
    const index = this.animaux.indexOf(animal);
    if (index > -1) {
      this.animaux.splice(index, 1);
    }
  }

  // Méthode pour retourner la liste des groupes
  listeGroupes(): Groupe[] {
    return this.groupes;
  }

  // Méthode pour consulter un groupe par son ID
  consulterGroupe(id: number): Groupe {
    return this.groupes.find(g => g.idGroupe == id)!;
  }
  rechercherParGroupe(idGroupe: number): Animal[] {
    const animauxRecherche: Animal[] = [];
    this.animaux.forEach((cur, index) => {
      if(idGroupe == cur.groupe.idGroupe) { //
        console.log("Animal trouvé : ", cur);
        animauxRecherche.push(cur);
      }
    });
    return animauxRecherche;
  }
  
}
