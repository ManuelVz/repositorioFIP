// Defino la clase Mascota para manejar informacion de las mascotas
export class Mascota {
  
    // Constructor para inicializar una mascota con su nombre, especie y el ID de su dueño
    constructor(protected id: number, protected nombre: string, protected especie: string, protected dueñoId: number) {
      this.id = id;
      this.especie = ['perro', 'gato'].includes(especie.toLowerCase()) ? especie : 'exotica';
    }
  }