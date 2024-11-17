// Importo la clase base General
import { General } from './General';

// Defino la clase Veterinaria que hereda de General
export class Veterinaria extends General {
  // Constructor para inicializar una veterinaria
  constructor(id: number, nombre: string, telefono: string, direccion: string) {
    super(id, nombre, telefono, direccion); // Telefono se puede dejar vacio, ya que no es obligatorio para Veterinaria
  }
}
