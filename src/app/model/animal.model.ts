import { Groupe } from "./groupe.model";

export default class Animal {
  idAnimal!: number;
  nomAnimal!: string;
  especeAnimal!: string;
  dateNaissance!: Date;
  groupe!: Groupe;

  email!: string;
}
