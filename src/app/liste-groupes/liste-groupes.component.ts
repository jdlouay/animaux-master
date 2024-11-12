import { Component, OnInit } from '@angular/core';
import { Groupe } from '../model/groupe.model';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-liste-groupes',
  templateUrl: './liste-groupes.component.html',
})
export class ListeGroupesComponent implements OnInit {
  groupes: Groupe[] = []; // Liste des groupes
  updatedGroup: Groupe = { idGroupe: 0, nomGroupe: '' }; 
  ajout: boolean = true; 

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.chargerGroupes(); 
  }

  
  chargerGroupes(): void {
    this.groupes = this.animalService.listeGroupes(); // Recharger les groupes
  }

  // Passer en mode modification avec un groupe existant
  updateGroupe(groupe: Groupe): void {
    this.updatedGroup = { ...groupe }; 
    this.ajout = false; // Passer en mode modification
  }

  onGroupeUpdated(updatedGroupe: Groupe): void {
    const index = this.groupes.findIndex(g => g.idGroupe == updatedGroupe.idGroupe);
  
    if (index !== -1) {
      // Si le groupe existe, mettez-le à jour
      this.groupes[index] = updatedGroupe;
    } else {
      // Si le groupe n'existe pas, ajoutez-le directement
      updatedGroupe.idGroupe = this.groupes.length > 0
        ? this.groupes[this.groupes.length - 1].idGroupe + 1 // Incrémenter l'ID à partir du dernier
        : 1; // Premier groupe
      this.groupes.push(updatedGroupe);
    }

 /*   this.resetForm(); 
  }

  private resetForm(): void {
    this.ajout = true; // Retourner en mode ajout
    this.updatedGroup = { idGroupe: 0, nomGroupe: '' }; // Réinitialiser les données
 
 */ }
}
