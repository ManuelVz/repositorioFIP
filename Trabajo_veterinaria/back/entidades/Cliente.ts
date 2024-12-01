// Importo la clase base General
import { General} from './General';

// Defino la clase Cliente que hereda de General
export class Cliente extends General {
  private visitas: number; // Cantidad de visitas del cliente
  private esVIP: boolean;  // Flag para saber si el cliente es VIP

  // Constructor para inicializar un cliente
  constructor(id: number, nombre: string, telefono: number, direccion: string) {
    super(id, nombre, telefono, direccion); // Llamo al constructor de General
    this.visitas = 1; // Arranca con 1 visita
    this.esVIP = false; // No es VIP por defecto
  }

  // Metodo para incrementar la cantidad de visitas
  incrementarVisitas(): void {
    this.visitas++; // Aumento la cantidad de visitas
    if (this.visitas >= 5) {
      this.esVIP = true; // Si llega a 5 visitas, lo marco como VIP
    }
  }
}
