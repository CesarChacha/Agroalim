CREATE TABLE administradores (
	id_administrador INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(512) NOT NULL,
	apellido VARCHAR(512) NOT NULL,
	correo VARCHAR(512) NOT NULL,
	[password] VARCHAR(512) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL 
)

--INSERT INTO administradores VALUES('Ra�l','Carvajal','rcarvajal@tecnoap.com','1234567',1,0,GETDATE())

CREATE TABLE empresas (
	id_empresa INT PRIMARY KEY IDENTITY(1,1),
	razon_social VARCHAR(256) NOT NULL,
	rfc  VARCHAR(16) NOT NULL,
	nombre_comercial VARCHAR(256) NOT NULL,
	descripcion VARCHAR(1024) NOT NULL,
	productos BIT NOT NULL,
	servicios BIT NOT NULL,
	solicitud_aceptada BIT NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)

CREATE TABLE domicilios (
	id_domicilio INT PRIMARY KEY IDENTITY(1,1),
	calle VARCHAR(1024) NOT NULL,
	numero VARCHAR(32) NOT NULL,
	codigo_postal VARCHAR(8) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL,
	id_empresa INT NOT NULL,
	
	CONSTRAINT FK_empresa_domicilio FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa)
)

CREATE TABLE telefonos (
	id_telefono INT PRIMARY KEY IDENTITY(1,1),
	telefono VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL,
	id_empresa INT NOT NULL,
	
	CONSTRAINT FK_empresa_telefono FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa)
)

CREATE TABLE sitios (
	id_sitios INT PRIMARY KEY IDENTITY(1,1),
	sitio VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL,
	id_empresa INT NOT NULL,
	
	CONSTRAINT FK_empresa_sitio FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa)
)


CREATE TABLE puestos (
	id_puesto INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE profesiones (
	id_profesion INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE comites (
	id_comite INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE actividades (
	id_actividad INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE facturacion (
	id_facturacion INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE organizaciones (
	id_organizacion INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE normas (
	id_norma INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)
CREATE TABLE temas (
	id_tema INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL
)

CREATE TABLE responsables (
	id_responsable INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(64) NOT NULL,
	apellido VARCHAR(64) NOT NULL,
	correo VARCHAR(64) NOT NULL,
	[password] VARCHAR(64) NOT NULL,
	telefono_oficina VARCHAR(16) NOT NULL,
	telefono_whatsapp VARCHAR(16) NOT NULL,
	activo BIT NOT NULL,
	baja BIT NOT NULL,
	id_empresa INT NOT NULL,
	id_puesto INT NOT NULL,
	id_profesion INT NOT NULL,
	id_comite INT NOT NULL,
	fecha_actualizacion DATETIME NOT NULL,

	CONSTRAINT FK_responsable_empresa FOREIGN KEY (id_empresa) REFERENCES empresas(id_empresa),
	CONSTRAINT FK_responsable_puesto FOREIGN KEY (id_puesto) REFERENCES puestos(id_puesto),
	CONSTRAINT FK_responsable_profesion FOREIGN KEY (id_profesion) REFERENCES profesiones(id_profesion),
	CONSTRAINT FK_responsable_comite FOREIGN KEY (id_comite) REFERENCES comites(id_comite)
)