import { Cliente } from '../entidades/Cliente'; // Importo la clase Cliente que es la entidad que voy a manejar
import { BaseServicio } from './BaseServicio'; // Importo la clase base donde tengo los metodos comunes

export class ClienteService extends BaseServicio<Cliente> { // ClienteService hereda de BaseServicio para poder usar sus metodos comunes
  
  // Este es el metodo para agregar un cliente
  // Recibo los parametros necesarios, genero un nuevo ID y creo el cliente con los datos recibidos
  agregarElemento(nombre: string, telefono: number, direccion: string): void {
    const nuevoID = this.generarID(); // Genero el ID unico para este cliente
    const cliente = new Cliente(nuevoID, nombre, telefono, direccion); // Creo el nuevo cliente
    (this as any).elementos.push(cliente); // Lo agrego a la lista de elementos, usando la propiedad heredada de la clase base
    console.log(`Cliente ${nombre} agregado con éxito.`); // Printeo un mensaje confirmando que el cliente se agrego
  }

  // Este metodo me sirve para modificar un cliente ya existente
  // Busco el cliente por ID y luego actualizo sus datos
  modificarElemento(id: number, nuevoNombre: string, nuevoTelefono: string, nuevaDireccion: string): void {
    const cliente = (this as any).elementos.find(c => c.id === id); // Busco el cliente en la lista por su ID
    if (cliente) { // Si lo encuentro
      cliente.nombre = nuevoNombre; // Actualizo su nombre
      cliente.telefono = nuevoTelefono; // Actualizo su telefono
      cliente.direccion = nuevaDireccion; // Actualizo su direccion
      console.log(`Cliente ${id} modificado con éxito.`); // Printeo un mensaje confirmando que se modifico
    } else { // Si no lo encuentro
      console.log(`Cliente con ID ${id} no encontrado.`); // Printeo un mensaje indicando que no se encontro el cliente
    }
  }
}
