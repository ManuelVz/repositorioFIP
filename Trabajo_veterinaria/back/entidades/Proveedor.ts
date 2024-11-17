// Importo la clase base General
import { General } from './General';

// Defino la clase Proveedor que hereda de General
export class Proveedor extends General {
  // Constructor para inicializar un proveedor
  constructor(id: number, nombre: string, telefono: string, direccion: string) {
    super(id, nombre, telefono, direccion); // Llamo al constructor de General
  }
}