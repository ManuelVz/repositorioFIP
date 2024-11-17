// Defino la clase Mascota para manejar informacion de las mascotas
export class Mascota {
    public id: number; // ID unico de la mascota
  
    // Constructor para inicializar una mascota con su nombre, especie y el ID de su dueño
    constructor(public nombre: string, public especie: string, public dueñoId: number) {
      // Si la especie no es perro o gato, la marco como exotica
      this.especie = ['perro', 'gato'].includes(especie.toLowerCase()) ? especie : 'exotica';
      this.id = 0; // ID lo asigna el servicio
    }
  }
  