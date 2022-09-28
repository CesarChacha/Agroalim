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

--INSERT INTO administradores VALUES('Raúl','Carvajal','rcarvajal@tecnoap.com','1234567',1,0,GETDATE())

CREATE TABLE empresas (
	id_empresa PRIMARY KEY IDENTITY(1,1),
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

CREATE