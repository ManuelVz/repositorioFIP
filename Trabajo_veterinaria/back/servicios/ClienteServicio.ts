import { Cliente } from '../entidades/Cliente';
import { generarIDUnico } from '../generadorID/GeneradorID';

// Clase para manejar las operaciones relacionadas con los clientes
export class ClienteService {
  private clientes: Cliente[] = []; // Lista de clientes

  // Metodo para agregar un cliente nuevo
  agregarCliente(nombre: string, telefono: string, direccion: string): void {
    const idExistentes = this.clientes.map(c => c.id); // Obtengo todos los IDs actuales
    const nuevoID = generarIDUnico(idExistentes); // Genero un ID unico
    const cliente = new Cliente(nuevoID, nombre, telefono, direccion); // Creo el cliente, pasando todos los parámetros al constructor
    this.clientes.push(cliente); // Lo agrego a la lista
    console.log(`Cliente ${nombre} agregado con exito.`); // Confirmo
  }

  // Metodo para modificar un cliente existente
  modificarCliente(id: number, nuevoNombre: string, nuevoTelefono: string, nuevaDireccion: string): void {
    const cliente = this.clientes.find(c => c.id === id); // Busco al cliente
    if (cliente) {
      cliente.nombre = nuevoNombre; // Actualizo el nombre
      cliente.telefono = nuevoTelefono; // Actualizo el telefono
      cliente.direccion = nuevaDireccion; // Actualizo la direccion
      console.log(`Cliente ${id} modificado con exito.`); // Confirmo
    } else {
      console.log(`Cliente con ID ${id} no encontrado.`); // Error si no lo encuentro
    }
  }

  // Metodo para eliminar un cliente por su ID
  eliminarCliente(id: number): void {
    const index = this.clientes.findIndex(c => c.id === id); // Busco el indice del cliente
    if (index !== -1) {
      this.clientes.splice(index, 1); // Lo saco de la lista
      console.log(`Cliente ${id} eliminado con exito.`); // Confirmo
    } else {
      console.log(`Cliente con ID ${id} no encontrado.`); // Error si no lo encuentro
    }
  }

  // Metodo para obtener todos los clientes
  obtenerClientes(): Cliente[] {
    return this.clientes; // Devuelvo la lista de clientes
  }

  // Metodo para incrementar visitas
  incrementarVisitasCliente(id: number): void {
    const cliente = this.clientes.find(c => c.id === id);
    if (cliente) {
      cliente.incrementarVisitas(); // Usa el metodo de la clase Cliente
    }
  }
}


