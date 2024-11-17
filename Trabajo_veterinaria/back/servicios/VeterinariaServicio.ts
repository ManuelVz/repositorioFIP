import { Veterinaria } from '../entidades/Veterinaria';
import { generarIDUnico } from '../generadorID/GeneradorID';

// Clase para manejar las operaciones relacionadas con las veterinarias
export class VeterinariaService {
  private veterinarias: Veterinaria[] = []; // Lista de veterinarias

  // Metodo para agregar una veterinaria nueva
  agregarVeterinaria(nombre: string, telefono: string, direccion: string): void {
    const idExistentes = this.veterinarias.map(v => v.id); // Obtengo todos los IDs actuales
    const nuevoID = generarIDUnico(idExistentes); // Genero un ID unico
    const veterinaria = new Veterinaria(nuevoID, nombre, telefono, direccion); // Creo la veterinaria, pasando todos los parámetros
    this.veterinarias.push(veterinaria); // La agrego a la lista
    console.log(`Veterinaria ${nombre} agregada con exito.`); // Confirmo
  }

  // Metodo para modificar una veterinaria existente
  modificarVeterinaria(id: number, nuevoNombre: string, nuevaDireccion: string): void {
    const veterinaria = this.veterinarias.find(v => v.id === id); // Busco la veterinaria
    if (veterinaria) {
      veterinaria.nombre = nuevoNombre; // Actualizo el nombre
      veterinaria.direccion = nuevaDireccion; // Actualizo la direccion
      console.log(`Veterinaria ${id} modificada con exito.`); // Confirmo
    } else {
      console.log(`Veterinaria con ID ${id} no encontrada.`); // Error si no la encuentro
    }
  }

  // Metodo para eliminar una veterinaria por su ID
  eliminarVeterinaria(id: number): void {
    const index = this.veterinarias.findIndex(v => v.id === id); // Busco el indice
    if (index !== -1) {
      this.veterinarias.splice(index, 1); // La saco de la lista
      console.log(`Veterinaria ${id} eliminada con exito.`); // Confirmo
    } else {
      console.log(`Veterinaria con ID ${id} no encontrada.`); // Error si no la encuentro
    }
  }

  // Metodo para obtener todas las veterinarias
  obtenerVeterinarias(): Veterinaria[] {
    return this.veterinarias; // Devuelvo la lista de veterinarias
  }
}
