import { Veterinaria } from '../entidades/Veterinaria';
import { BaseServicio } from './BaseServicio';

//Voy a omitir comentar la logica de esta clase, ya que tiene la misma logica que ClienteService, y MascotaService

export class VeterinariaService extends BaseServicio<Veterinaria> {

  agregarElemento(nombre: string, telefono: number, direccion: string): void {
    const nuevoID = this.generarID();
    const veterinaria = new Veterinaria(nuevoID, nombre, telefono, direccion);
    (this as any).elementos.push(veterinaria);
    console.log(`Veterinaria ${nombre} agregada con éxito.`);
  }

  modificarElemento(id: number, nuevoNombre: string, nuevaDireccion: string): void {
    const veterinaria = (this as any).elementos.find(v => v.id === id);
    if (veterinaria) {
      veterinaria.nombre = nuevoNombre;
      veterinaria.direccion = nuevaDireccion;
      console.log(`Veterinaria ${id} modificada con éxito.`);
    } else {
      console.log(`Veterinaria con ID ${id} no encontrada.`);
    }
  }
}
