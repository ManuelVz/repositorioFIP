import { Proveedor } from '../entidades/Proveedor';
import { BaseServicio } from './BaseServicio';

//Voy a omitir comentar la logica de esta clase, ya que tiene la misma logica que ClienteService, y MascotaService

export class ProveedorService extends BaseServicio<Proveedor> {

  agregarElemento(nombre: string, telefono: number, direccion: string): void {
    const nuevoID = this.generarID();
    const proveedor = new Proveedor(nuevoID, nombre, telefono, direccion);
    (this as any).elementos.push(proveedor);
    console.log(`Proveedor ${nombre} agregado con éxito.`);
  }

  modificarElemento(id: number, nuevoNombre: string, nuevoTelefono: string, nuevaDireccion: string): void {
    const proveedor = (this as any).elementos.find(p => p.id === id);
    if (proveedor) {
      proveedor.nombre = nuevoNombre;
      proveedor.telefono = nuevoTelefono;
      proveedor.direccion = nuevaDireccion;
      console.log(`Proveedor ${id} modificado con éxito.`);
    } else {
      console.log(`Proveedor con ID ${id} no encontrado.`);
    }
  }
}
