import {Medicament} from "./Medicament";
export interface Presentation{
  CodeCIP7 : bigint;
  Libelle : string;
  Prix : number;
  StockLogique : bigint;

  lesMedicaments : Medicament[];
}
