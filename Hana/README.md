# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

### 1.  Ejercicio Ventas

- Crear el namespace “sales”. Utilice los “types” cuid y managed para cada entidad, recuerde que estos se encuentran dentro de @sap/cds/common. Tome en cuenta los campos obligatorios y de sólo lectura que considere necesarios
- Dentro del namespace “sales”, crear la entidad “Clientes” con los siguientes atributos:
  • ID
  • Nombre
  • Apellido
  • DNI
  • Fecha de Nacimiento
- Dentro del namespace “sales”, crear la entidad “Productos” con los siguientes atributos:
  • ID
  • Nombre del producto
  • Rubro: String(30) enum {
  Limpieza = 'LP';
  Fiambreria = 'FB'
  };
  • Precio
  • Stock
  • Stock mínimo
- Añade datos a las entidades.
  Servicio
- Crear el servicio storeSales


### 2.  Ejercicio Automotor
- Crear el namespace “automotor”
Crear las siguientes entidades dentro del namespace “automotor”. Tome en cuenta los campos obligatorios y de sólo lectura que considere necesarios
- Crear la entidad “Marcas” con los siguientes atributos:
•   ID.
•   Nombre.
•   País de origen. (sólo lectura)
•   Comentario. 
- Crear la entidad “Modelos” con los siguientes atributos:
•   ID.
•   Nombre.
•   Comentario.
- Crear la entidad “Versiones” con los siguientes atributos:
•   Key model
•   Key Color.
•   Precio.
-  Establecer las relaciones (associations/compositions) entre las entidades.
-  Añade datos a las entidades.
-  Modularizar los campos ID y nombre en un aspecto para las entidades “Marcas” y “Modelos”
Servicio
- Crear el servicio autoservice para exponer las entidades
-  Crear una vista para exponer toda la información en una sola entidad.