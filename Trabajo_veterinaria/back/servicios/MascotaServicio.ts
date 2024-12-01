import { Mascota } from '../entidades/Mascota'; // Importo la clase Mascota que es la entidad que voy a manejar
import { BaseServicio } from './BaseServicio'; // Importo la clase base donde tengo los metodos comunes

export class MascotaService extends BaseServicio<Mascota> { // MascotaService hereda de BaseServicio para poder usar sus metodos comunes

  // Metodo para agregar una nueva mascota
  agregarElemento(nombre: string, especie: string, dueñoId: number): void {
    const nuevoID = this.generarID(); // Genero el ID unico para esta mascota
    const mascota = new Mascota(nuevoID, nombre, especie, dueñoId); // Creo la mascota con los datos proporcionados
    (this as any).elementos.push(mascota); // Agrego la nueva mascota a la lista de elementos
    console.log(`Mascota ${nombre} agregada con éxito.`); // Confirmo que la mascota se agregó correctamente
  }

  // Metodo para modificar los datos de una mascota
  modificarElemento(id: number, nuevoNombre: string, nuevaEspecie: string): void {
    const mascota = (this as any).elementos.find(m => m.id === id); // Busco la mascota por su ID
    if (mascota) { // Si la encuentro
      mascota.nombre = nuevoNombre; // Actualizo el nombre de la mascota
      mascota.especie = nuevaEspecie; // Actualizo la especie de la mascota
      console.log(`Mascota ${id} modificada con éxito.`); // Printeo que la mascota fue modificada
    } else { // Si no la encuentro
      console.log(`Mascota con ID ${id} no encontrada.`); // Printeo que no se encontro la mascota
    }
  }
}
