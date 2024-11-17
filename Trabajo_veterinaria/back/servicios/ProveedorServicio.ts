import { Proveedor } from '../entidades/Proveedor';
import { generarIDUnico } from '../generadorID/GeneradorID';

// Clase para manejar las operaciones relacionadas con los proveedores
export class ProveedorService {
  private proveedores: Proveedor[] = []; // Lista de proveedores

  // Metodo para agregar un proveedor nuevo
  agregarProveedor(nombre: string, telefono: string, direccion: string): void {
    const idExistentes = this.proveedores.map(p => p.id); // Obtengo todos los IDs actuales
    const nuevoID = generarIDUnico(idExistentes); // Genero un ID unico
    const proveedor = new Proveedor(nuevoID, nombre, telefono, direccion); // Creo el proveedor, pasando todos los parámetros
    this.proveedores.push(proveedor); // Lo agrego a la lista
    console.log(`Proveedor ${nombre} agregado con exito.`); // Confirmo
  }

  // Metodo para modificar un proveedor existente
  modificarProveedor(id: number, nuevoNombre: string, nuevoTelefono: string, nuevaDireccion: string): void {
    const proveedor = this.proveedores.find(p => p.id === id); // Busco al proveedor
    if (proveedor) {
      proveedor.nombre = nuevoNombre; // Actualizo el nombre
      proveedor.telefono = nuevoTelefono; // Actualizo el telefono
      proveedor.direccion = nuevaDireccion; // Actualizo la direccion
      console.log(`Proveedor ${id} modificado con exito.`); // Confirmo
    } else {
      console.log(`Proveedor con ID ${id} no encontrado.`); // Error si no lo encuentro
    }
  }

  // Metodo para eliminar un proveedor por su ID
  eliminarProveedor(id: number): void {
    const index = this.proveedores.findIndex(p => p.id === id); // Busco el indice
    if (index !== -1) {
      this.proveedores.splice(index, 1); // Lo saco de la lista
      console.log(`Proveedor ${id} eliminado con exito.`); // Confirmo
    } else {
      console.log(`Proveedor con ID ${id} no encontrado.`); // Error si no lo encuentro
    }
  }

  // Metodo para obtener todos los proveedores
  obtenerProveedores(): Proveedor[] {
    return this.proveedores; // Devuelvo la lista de proveedores
  }
}
