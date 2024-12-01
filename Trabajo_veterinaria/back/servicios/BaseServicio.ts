import { generarIDUnico } from '../generadorID/GeneradorID';

export abstract class BaseServicio<T> {
  private elementos: T[] = []; // Esta es la lista de elementos, que voy a usar para almacenar todo lo que agregue

  // Este metodo me sirve para generar un ID unico
  // Agarro todos los IDs que ya existen, los mapeo, y luego genero uno nuevo
  protected generarID(): number {
    const idExistentes = this.elementos.map(e => (e as any).id); // Obtengo todos los ID de los elementos actuales
    return generarIDUnico(idExistentes); // Llamo a la funcion que me genera un ID unico
  }

  // Este es un metodo que uso para eliminar un elemento por ID
  eliminarElemento(id: number): void {
    const index = this.elementos.findIndex(e => (e as any).id === id); // Busco el indice del elemento que quiero eliminar
    if (index !== -1) { // Si lo encuentro
      this.elementos.splice(index, 1); // Lo elimino de la lista
      console.log(`Elemento con ID ${id} eliminado con exito.`); // Printeo mensaje confirmando que se elimino
    } else { // Si no lo encuentro
      console.log(`Elemento con ID ${id} no encontrado.`); // Printeo un mensaje diciendo que no lo encontre
    }
  }

  // Este metodo devuelve todos los elementos de la lista
  obtenerElementos(): T[] {
    return this.elementos; // Devuelvo la lista
  }

  // Estos son metodos abstractos que voy a definir en las clases hijas
  // Cada clase hija va a tener que implementar estos metodos
  abstract agregarElemento(...args: any[]): void;
  abstract modificarElemento(id: number, ...args: any[]): void;
}
