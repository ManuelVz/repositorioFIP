import express, { Request, Response } from 'express';
import { ClienteService } from './back/servicios/ClienteServicio';
import { MascotaService } from './back/servicios/MascotaServicio';
import { ProveedorService } from './back/servicios/ProveedorServicio';
import { VeterinariaService } from './back/servicios/VeterinariaServicio';
import cors from 'cors';

// Instancio los servicios
const clienteService = new ClienteService();
const mascotaService = new MascotaService();
const proveedorService = new ProveedorService();
const veterinariaService = new VeterinariaService();

const app = express();
app.use(cors());  // Esto permite que el servidor acepte solicitudes desde cualquier origen
app.use(express.json());

// Endpoints para clientes
app.post('/clientes', (req: Request, res: Response) => {
  const { nombre, telefono, direccion } = req.body;  // Desestructuro 'direccion' también
  clienteService.agregarCliente(nombre, telefono, direccion);  // Pasamos 'direccion' al servicio
  res.json({ message: `Cliente ${nombre} agregado` });
});

app.get('/clientes', (req: Request, res: Response) => {
  res.json(clienteService.obtenerClientes());
});

app.put('/clientes/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, direccion } = req.body; // Incluye direccion
  clienteService.modificarCliente(id, nombre, telefono, direccion); // Llamamos al metodo del servicio
  res.json({ message: `Cliente ${id} modificado` });
});

app.delete('/clientes/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  clienteService.eliminarCliente(id); // Llamamos al metodo del servicio
  res.json({ message: `Cliente ${id} eliminado` });
});

app.put('/clientes/:id/visitas', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  clienteService.incrementarVisitasCliente(id);
  res.json({ message: `Visitas del cliente ${id} incrementadas` });
});

// Endpoints para mascotas
app.post('/mascotas', (req: Request, res: Response) => {
  const { nombre, tipo, idCliente } = req.body;
  mascotaService.agregarMascota(nombre, tipo, idCliente);
  res.json({ message: `Mascota ${nombre} agregada` });
});

app.get('/mascotas', (req: Request, res: Response) => {
  res.json(mascotaService.obtenerMascotas());
});

app.put('/mascotas/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nombre, tipo } = req.body; // Cambios necesarios
  mascotaService.modificarMascota(id, nombre, tipo); // Llamamos al metodo del servicio
  res.json({ message: `Mascota ${id} modificada` });
});

app.delete('/mascotas/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  mascotaService.eliminarMascota(id); // Llamamos al metodo del servicio
  res.json({ message: `Mascota ${id} eliminada` });
});



// Endpoints para proveedores
app.post('/proveedores', (req: Request, res: Response) => {
  const { nombre, telefono, direccion } = req.body;  // Desestructuro 'direccion' también
  proveedorService.agregarProveedor(nombre, telefono, direccion);  // Pasamos 'direccion' al servicio
  res.json({ message: `Proveedor ${nombre} agregado` });
});

app.get('/proveedores', (req: Request, res: Response) => {
  res.json(proveedorService.obtenerProveedores());
});

app.put('/proveedores/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, direccion } = req.body; // Incluye direccion
  proveedorService.modificarProveedor(id, nombre, telefono, direccion); // Llamamos al metodo del servicio
  res.json({ message: `Proveedor ${id} modificado` });
});

app.delete('/proveedores/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  proveedorService.eliminarProveedor(id); // Llamamos al metodo del servicio
  res.json({ message: `Proveedor ${id} eliminado` });
});

// Endpoints para veterinarias
app.post('/veterinarias', (req: Request, res: Response) => {
  const { nombre, telefono, direccion } = req.body;
  veterinariaService.agregarVeterinaria(nombre, telefono, direccion);
  res.json({ message: `Veterinaria ${nombre} agregada` });
});

app.get('/veterinarias', (req: Request, res: Response) => {
  res.json(veterinariaService.obtenerVeterinarias());
});

app.put('/veterinarias/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const { nombre, direccion } = req.body; // Cambios necesarios
  veterinariaService.modificarVeterinaria(id, nombre, direccion); // Llamamos al metodo del servicio
  res.json({ message: `Veterinaria ${id} modificada` });
});

app.delete('/veterinarias/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  veterinariaService.eliminarVeterinaria(id); // Llamamos al metodo del servicio
  res.json({ message: `Veterinaria ${id} eliminada` });
});

// Servidor
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

