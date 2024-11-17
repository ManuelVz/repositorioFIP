// Clase general con atributos comunes (id, nombre, telefono, direccion)
export class General {
  // Constructor para inicializar los atributos comunes
  constructor(
    public id: number,        // ID unico (se asignara desde los servicios)
    public nombre: string,    // Nombre de la persona
    public telefono: string,  // Telefono de contacto
    public direccion: string  // Direccion de la persona
  ) {}
}
