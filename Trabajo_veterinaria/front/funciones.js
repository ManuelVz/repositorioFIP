// Defino el servidor que voy a utilizar para la API (si cambio el puerto en el back, lo voy a tener que cambiar aca).
const apiBase = "http://localhost:3000";

// Esta funcion se encarga de mostrar los datos en formato tabla con botones para realizar acciones sobre cada fila
function renderTable(data, columns, containerId, entity) {
  let tableHTML = "<table><thead><tr>";
  
  // Recorro las columnas para generar los encabezados de la tabla
  columns.forEach(col => {
    tableHTML += `<th>${col}</th>`; // Agrego el nombre de cada columna en la tabla
  });
  
  // Agrego una columna extra para los botones de accion (editar, eliminar, etc.)
  tableHTML += "<th>Acciones</th></tr></thead><tbody>";

  // Recorro los datos (cada item) y por cada uno creo una fila en la tabla
  data.forEach(item => {
    tableHTML += "<tr>";
    
    // Por cada columna, muestro el dato correspondiente en la fila
    columns.forEach(col => {
      // Si la columna es 'visitas', muestro ese dato en particular
      if (col === 'visitas') {
        tableHTML += `<td>${item.visitas}</td>`; // Agrego el numero de visitas
      } else {
        tableHTML += `<td>${item[col]}</td>`; // Agrego el dato de la columna
      }
    });
    
    // Agrego los botones de editar, eliminar y en algunos casos, registrar visita
    tableHTML += 
      `<td>
        <button onclick="editar${entity}(${item.id})">Editar</button>
        <button onclick="eliminar${entity}(${item.id})">Eliminar</button>
        ${entity === "Cliente" ? `<button onclick="incrementarVisitasCliente(${item.id})">Registrar Visita</button>` : ""}
      </td>`;
    tableHTML += "</tr>";
  });

  // Cierro la tabla
  tableHTML += "</tbody></table>";
  
  // Coloco la tabla generada dentro del contenedor especificado
  document.getElementById(containerId).innerHTML = tableHTML;
}

// Clientes
async function obtenerClientes() {
  // Hago una peticion a la API para obtener todos los clientes
  const res = await fetch(`${apiBase}/cliente`);
  const clientes = await res.json();
  
  // Llamo a la funcion para mostrar los clientes en la tabla
  renderTable(clientes, ["id", "nombre", "telefono", "direccion", "esVIP", "visitas"], "clientes-output", "Cliente");
}

async function crearCliente() {
  // Pido los datos del nuevo cliente
  const nombre = prompt("Nombre del cliente:");
  const telefono = prompt("Telefono del cliente:");
  const direccion = prompt("Direccion del cliente:");
  
  // Envio esos datos a la API para crear el cliente
  await fetch(`${apiBase}/cliente`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, telefono, direccion }),
  });
  
  // Aviso que se creo el cliente y actualizo la lista
  alert("Cliente creado con exito");
  obtenerClientes();
}

async function editarCliente(id) {
  // Pido los nuevos datos del cliente a editar
  const nombre = prompt("Nuevo nombre del cliente:");
  const telefono = prompt("Nuevo telefono del cliente:");
  const direccion = prompt("Nueva direccion del cliente:");
  
  // Envio esos nuevos datos a la API para actualizar el cliente
  await fetch(`${apiBase}/cliente/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, telefono, direccion }),
  });
  
  alert("Cliente editado con exito");
  obtenerClientes();
}

async function eliminarCliente(id) {
  // Pregunto si el usuario esta seguro de eliminar el cliente
  if (confirm("¿Seguro que desea eliminar este cliente?")) {
    // Si confirma, envio la peticion para eliminarlo
    await fetch(`${apiBase}/cliente/${id}`, { method: "DELETE" });
    alert("Cliente eliminado con exito");
    obtenerClientes();
  }
}

async function incrementarVisitasCliente(id) {
  // Envio una peticion para incrementar las visitas de un cliente
  await fetch(`${apiBase}/cliente/${id}/visitas`, { method: "PUT" });
  alert(`Visitas del cliente ${id} incrementadas`);
  obtenerClientes(); // Actualizo la lista de clientes
}

// Mascotas
async function obtenerMascotas() {
  const res = await fetch(`${apiBase}/mascota`);
  const mascotas = await res.json();
  renderTable(mascotas, ["id", "nombre", "especie", "dueñoId"], "mascotas-output", "Mascota");
}

async function crearMascota() {
  const nombre = prompt("Nombre de la mascota:");
  const especie = prompt("Especie de la mascota:");
  const dueñoId = prompt("ID del dueño de la mascota:");
  
  await fetch(`${apiBase}/mascota`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, especie, dueñoId }),
  });
  
  alert("Mascota creada con exito");
  obtenerMascotas();
}

async function editarMascota(id) {
  const nombre = prompt("Nuevo nombre de la mascota:");
  const especie = prompt("Nueva especie de la mascota:");
  const dueñoId = prompt("Nuevo ID del dueño:");
  
  await fetch(`${apiBase}/mascota/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, especie, dueñoId }),
  });
  
  alert("Mascota editada con exito");
  obtenerMascotas();
}

async function eliminarMascota(id) {
  if (confirm("¿Seguro que desea eliminar esta mascota?")) {
    await fetch(`${apiBase}/mascota/${id}`, { method: "DELETE" });
    alert("Mascota eliminada con exito");
    obtenerMascotas();
  }
}

// Proveedores
async function obtenerProveedores() {
  const res = await fetch(`${apiBase}/proveedor`);
  const proveedores = await res.json();
  renderTable(proveedores, ["id", "nombre", "telefono", "direccion"], "proveedores-output", "Proveedor");
}

async function crearProveedor() {
  const nombre = prompt("Nombre del proveedor:");
  const telefono = prompt("Telefono del proveedor:");
  const direccion = prompt("Direccion del proveedor:");
  
  await fetch(`${apiBase}/proveedor`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, telefono, direccion }),
  });
  
  alert("Proveedor creado con exito");
  obtenerProveedores();
}

async function editarProveedor(id) {
  const nombre = prompt("Nuevo nombre del proveedor:");
  const telefono = prompt("Nuevo telefono del proveedor:");
  const direccion = prompt("Nueva direccion del proveedor:");
  
  await fetch(`${apiBase}/proveedor/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, telefono, direccion }),
  });
  
  alert("Proveedor editado con exito");
  obtenerProveedores();
}

async function eliminarProveedor(id) {
  if (confirm("¿Seguro que desea eliminar este proveedor?")) {
    await fetch(`${apiBase}/proveedor/${id}`, { method: "DELETE" });
    alert("Proveedor eliminado con exito");
    obtenerProveedores();
  }
}

// Veterinarias
async function obtenerVeterinarias() {
  const res = await fetch(`${apiBase}/veterinaria`);
  const veterinarias = await res.json();
  renderTable(veterinarias, ["id", "nombre", "telefono", "direccion"], "veterinarias-output", "Veterinaria");
}

async function crearVeterinaria() {
  const nombre = prompt("Nombre de la veterinaria:");
  const direccion = prompt("Direccion de la veterinaria:");
  const telefono = prompt("Telefono de la veterinaria:");
  
  await fetch(`${apiBase}/veterinaria`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, direccion, telefono }),
  });
  
  alert("Veterinaria creada con exito");
  obtenerVeterinarias();
}

async function editarVeterinaria(id) {
  const nombre = prompt("Nuevo nombre de la veterinaria:");
  const direccion = prompt("Nueva direccion de la veterinaria:");
  const telefono = prompt("Nuevo telefono de la veterinaria:");
  
  await fetch(`${apiBase}/veterinaria/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nombre, direccion, telefono }),
  });
  
  alert("Veterinaria editada con exito");
  obtenerVeterinarias();
}

async function eliminarVeterinaria(id) {
  if (confirm("¿Seguro que desea eliminar esta veterinaria?")) {
    await fetch(`${apiBase}/veterinaria/${id}`, { method: "DELETE" });
    alert("Veterinaria eliminada con exito");
    obtenerVeterinarias();
  }
}
