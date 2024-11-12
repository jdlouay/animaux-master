import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Groupe } from '../model/groupe.model';

@Component({
  selector: 'app-update-groupe',
  templateUrl: './update-groupe.component.html',
})
export class UpdateGroupeComponent implements OnInit {
  @Input() groupe!: Groupe; // Groupe reçu du parent
  @Input() ajout!: boolean; // Contexte : ajout ou modification
  @Output() groupeUpdated = new EventEmitter<Groupe>(); // Notifie le parent

  ngOnInit(): void {
  }

  saveGroupe(): void {
    this.groupeUpdated.emit(this.groupe); // Émettre les données vers le parent
  }
}
