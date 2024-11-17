// Funcion para generar un ID unico basado en los IDs existentes
export function generarIDUnico(idsExistentes: number[]): number {
    let nuevoID = 1; // Arranco desde 1
    while (idsExistentes.includes(nuevoID)) {
      nuevoID++; // Sigo probando numeros consecutivos hasta encontrar uno libre
    }
    return nuevoID; // Devuelvo el ID unico
  }
  