  import { Mascota } from '../entidades/Mascota';
  import { generarIDUnico } from '../generadorID/GeneradorID';

  // Clase para manejar las operaciones relacionadas con las mascotas
  export class MascotaService {
    private mascotas: Mascota[] = []; // Lista de mascotas

    // Metodo para agregar una mascota nueva
    agregarMascota(nombre: string, especie: string, dueñoId: number): void {
      const idExistentes = this.mascotas.map(m => m.id); // Obtengo todos los IDs actuales
      const nuevoID = generarIDUnico(idExistentes); // Genero un ID unico
      const mascota = new Mascota(nombre, especie, dueñoId); // Creo la mascota
      mascota.id = nuevoID; // Le asigno el ID generado
      this.mascotas.push(mascota); // La agrego a la lista
      console.log(`Mascota ${nombre} agregada con exito.`); // Confirmo
    }

    // Metodo para modificar una mascota existente
    modificarMascota(id: number, nuevoNombre: string, nuevaEspecie: string): void {
      const mascota = this.mascotas.find(m => m.id === id); // Busco la mascota
      if (mascota) {
        mascota.nombre = nuevoNombre; // Actualizo el nombre
        mascota.especie = nuevaEspecie; // Actualizo la especie
        console.log(`Mascota ${id} modificada con exito.`); // Confirmo
      } else {
        console.log(`Mascota con ID ${id} no encontrada.`); // Error si no la encuentro
      }
    }

    // Metodo para eliminar una mascota por su ID
    eliminarMascota(id: number): void {
      const index = this.mascotas.findIndex(m => m.id === id); // Busco el indice
      if (index !== -1) {
        this.mascotas.splice(index, 1); // La saco de la lista
        console.log(`Mascota ${id} eliminada con exito.`); // Confirmo
      } else {
        console.log(`Mascota con ID ${id} no encontrada.`); // Error si no la encuentro
      }
    }

    // Metodo para obtener todas las mascotas
    obtenerMascotas(): Mascota[] {
      return this.mascotas; // Devuelvo la lista de mascotas
    }
  }
