import express, { Request, Response } from 'express';
import { ClienteService } from './back/servicios/ClienteServicio';
import { MascotaService } from './back/servicios/MascotaServicio';
import { ProveedorService } from './back/servicios/ProveedorServicio';
import { VeterinariaService } from './back/servicios/VeterinariaServicio';
import cors from 'cors';

const servicios = {
  clienteService: new ClienteService(),
  mascotaService: new MascotaService(),
  proveedorService: new ProveedorService(),
  veterinariaService: new VeterinariaService(),
};

const app = express();
app.use(cors());
app.use(express.json());

const crearEndpoint = (servicio: any, entidad: string) => {
  console.log(`Creando rutas para ${entidad}`);

  // Endpoint para agregar
  app.post(`/${entidad}`, (req: Request, res: Response) => {
    const { ...params } = req.body;
    servicio.agregarElemento(...Object.values(params));
    res.json({ message: `${entidad} agregado con éxito.` });
  });

  // Endpoint para obtener todos
  app.get(`/${entidad}`, (req: Request, res: Response) => {
    console.log(`GET /${entidad}`);  // Esto sirve para ver si la ruta es alcanzada
    res.json(servicio.obtenerElementos());
  });

  // Endpoint para editar
  app.put(`/${entidad}/:id`, (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { ...params } = req.body;
    servicio.modificarElemento(id, ...Object.values(params));
    res.json({ message: `${entidad} modificado con éxito.` });
  });

  // Endpoint para eliminar
  app.delete(`/${entidad}/:id`, (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    servicio.eliminarElemento(id);
    res.json({ message: `${entidad} eliminado con éxito.` });
  });

  // Endpoint para incrementar visitas de un cliente
  app.put(`/cliente/:id/visitas`, (req: Request, res: Response) => {
    const id = parseInt(req.params.id); // Obtener el ID del cliente de los parámetros
    const cliente = servicios.clienteService.obtenerElementos().find((c: any) => c.id === id); // Buscar el cliente
    
    if (cliente) {
      cliente.incrementarVisitas(); // Incrementar visitas
      res.json({ message: `Visitas del cliente ${id} incrementadas.`, cliente });
    } else {
      res.status(404).json({ error: `Cliente con ID ${id} no encontrado.` });
    }
});

};

// Crear endpoints para cada servicio
Object.entries(servicios).forEach(([key, servicio]) => {
  const entidad = key.replace('Service', '').toLowerCase();
  crearEndpoint(servicio, entidad);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

