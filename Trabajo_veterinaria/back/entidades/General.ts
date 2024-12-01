// Clase general con atributos comunes (id, nombre, telefono, direccion)
export abstract class General {
  // Constructor para inicializar los atributos comunes
  constructor(
    protected id: number,        // ID unico (voy a usar una funcion para generar IDs unicos)
    protected nombre: string,    // Nombre de la persona
    protected telefono: number,  // Telefono de contacto
    protected direccion: string  // Direccion de la persona
  ) {}
}
