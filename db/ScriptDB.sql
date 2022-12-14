USE [agroalim_qa]
GO
/****** Object:  Table [dbo].[administradores]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[administradores](
	[id_administrador] [int] IDENTITY(1,1),
	[nombre] [varchar](512),
	[apellido] [varchar](512),
	[correo] [varchar](512),
	[password] [varchar](512),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_administrador] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[cadena_productiva]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cadena_productiva](
	[id_cadena_productiva] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_cadena_productiva] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[comites]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[comites](
	[id_comite] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_comite] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detalles_empresa]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detalles_empresa](
	[id_detalles_empresa] [int] IDENTITY(1,1),
	[id_empresa] [int],
	[descripcion] [varchar](1024),
	[productos] [bit],
	[servicios] [bit],
	[numero_empleados] [int],
	[id_facturacion] [int],
	[exporta] [bit],
	[en_proceso_exportacion] [bit],
	[paises_exportacion] [varchar](2048),
	[sugerencia] [varchar](1024),
PRIMARY KEY CLUSTERED 
(
	[id_detalles_empresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[domicilios]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[domicilios](
	[id_domicilio] [int] IDENTITY(1,1),
	[calle] [varchar](1024),
	[numero] [varchar](32),
	[codigo_postal] [varchar](8),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
	[id_empresa] [int],
PRIMARY KEY CLUSTERED 
(
	[id_domicilio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empresa_cadena_productiva]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empresa_cadena_productiva](
	[id_empresa_cadena_productiva] [int] IDENTITY(1,1),
	[id_empresa] [int],
	[id_cadena_productiva] [int],
PRIMARY KEY CLUSTERED 
(
	[id_empresa_cadena_productiva] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empresa_norma]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empresa_norma](
	[id_empresa_norma] [int] IDENTITY(1,1),
	[id_empresa] [int],
	[id_norma] [int],
PRIMARY KEY CLUSTERED 
(
	[id_empresa_norma] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empresa_organizacion]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empresa_organizacion](
	[id_empresa_organizacion] [int] IDENTITY(1,1),
	[id_empresa] [int],
	[id_organizacion] [int],
	[comentario] [varchar](1024),
	[sugerencia] [varchar](1024),
PRIMARY KEY CLUSTERED 
(
	[id_empresa_organizacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empresa_tema]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empresa_tema](
	[id_empresa_tema] [int] IDENTITY(1,1),
	[id_empresa] [int],
	[id_tema] [int],
PRIMARY KEY CLUSTERED 
(
	[id_empresa_tema] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[empresas]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[empresas](
	[id_empresa] [int] IDENTITY(1,1),
	[razon_social] [varchar](256),
	[rfc] [varchar](16),
	[nombre_comercial] [varchar](256),
	[solicitud_aceptada] [bit],
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
	[fecha_solicitud] [datetime],
	[solicitud_rechazada] [bit],
PRIMARY KEY CLUSTERED 
(
	[id_empresa] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[facturacion]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[facturacion](
	[id_facturacion] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_facturacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[normas]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[normas](
	[id_norma] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_norma] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[organizaciones]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[organizaciones](
	[id_organizacion] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_organizacion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[profesiones]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[profesiones](
	[id_profesion] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_profesion] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[puestos]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[puestos](
	[id_puesto] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_puesto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[requisitos]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[requisitos](
	[id_requisitos] [int] IDENTITY(1,1),
	[id_empresa] [int],
	[file_name] [varchar](1024),
	[local_file_name] [varchar](2048),
	[media_type] [varchar](1024),
PRIMARY KEY CLUSTERED 
(
	[id_requisitos] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[responsables]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[responsables](
	[id_responsable] [int] IDENTITY(1,1),
	[nombre] [varchar](64),
	[apellido] [varchar](64),
	[correo] [varchar](64),
	[password] [varchar](64),
	[telefono_oficina] [varchar](16),
	[telefono_whatsapp] [varchar](16),
	[activo] [bit],
	[baja] [bit],
	[id_empresa] [int],
	[id_puesto] [int],
	[id_profesion] [int],
	[id_comite] [int],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_responsable] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[sitios]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[sitios](
	[id_sitios] [int] IDENTITY(1,1),
	[sitio] [varchar](16),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
	[id_empresa] [int],
PRIMARY KEY CLUSTERED 
(
	[id_sitios] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[telefonos]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[telefonos](
	[id_telefono] [int] IDENTITY(1,1),
	[telefono] [varchar](16),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
	[id_empresa] [int],
PRIMARY KEY CLUSTERED 
(
	[id_telefono] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[temas]    Script Date: 15/10/2022 01:52:59 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[temas](
	[id_tema] [int] IDENTITY(1,1),
	[nombre] [varchar](256),
	[activo] [bit],
	[baja] [bit],
	[fecha_actualizacion] [datetime],
PRIMARY KEY CLUSTERED 
(
	[id_tema] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[detalles_empresa]  WITH CHECK ADD  CONSTRAINT [FK_empresa_detalles_empresa] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[detalles_empresa] CHECK CONSTRAINT [FK_empresa_detalles_empresa]
GO
ALTER TABLE [dbo].[detalles_empresa]  WITH CHECK ADD  CONSTRAINT [FK_facturacion_detalles_empresa] FOREIGN KEY([id_facturacion])
REFERENCES [dbo].[facturacion] ([id_facturacion])
GO
ALTER TABLE [dbo].[detalles_empresa] CHECK CONSTRAINT [FK_facturacion_detalles_empresa]
GO
ALTER TABLE [dbo].[domicilios]  WITH CHECK ADD  CONSTRAINT [FK_empresa_domicilio] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[domicilios] CHECK CONSTRAINT [FK_empresa_domicilio]
GO
ALTER TABLE [dbo].[empresa_cadena_productiva]  WITH CHECK ADD  CONSTRAINT [FK_empresa_cadena_productiva_cadena_productiva] FOREIGN KEY([id_cadena_productiva])
REFERENCES [dbo].[cadena_productiva] ([id_cadena_productiva])
GO
ALTER TABLE [dbo].[empresa_cadena_productiva] CHECK CONSTRAINT [FK_empresa_cadena_productiva_cadena_productiva]
GO
ALTER TABLE [dbo].[empresa_cadena_productiva]  WITH CHECK ADD  CONSTRAINT [FK_empresa_cadena_productiva_empresa] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[empresa_cadena_productiva] CHECK CONSTRAINT [FK_empresa_cadena_productiva_empresa]
GO
ALTER TABLE [dbo].[empresa_norma]  WITH CHECK ADD  CONSTRAINT [FK_empresa_norma_empresa] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[empresa_norma] CHECK CONSTRAINT [FK_empresa_norma_empresa]
GO
ALTER TABLE [dbo].[empresa_norma]  WITH CHECK ADD  CONSTRAINT [FK_empresa_norma_norma] FOREIGN KEY([id_norma])
REFERENCES [dbo].[normas] ([id_norma])
GO
ALTER TABLE [dbo].[empresa_norma] CHECK CONSTRAINT [FK_empresa_norma_norma]
GO
ALTER TABLE [dbo].[empresa_organizacion]  WITH CHECK ADD  CONSTRAINT [FK_empresa_organizacion_empresa] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[empresa_organizacion] CHECK CONSTRAINT [FK_empresa_organizacion_empresa]
GO
ALTER TABLE [dbo].[empresa_organizacion]  WITH CHECK ADD  CONSTRAINT [FK_empresa_organizacion_organizacion] FOREIGN KEY([id_organizacion])
REFERENCES [dbo].[organizaciones] ([id_organizacion])
GO
ALTER TABLE [dbo].[empresa_organizacion] CHECK CONSTRAINT [FK_empresa_organizacion_organizacion]
GO
ALTER TABLE [dbo].[empresa_tema]  WITH CHECK ADD  CONSTRAINT [FK_empresa_tema_empresa] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[empresa_tema] CHECK CONSTRAINT [FK_empresa_tema_empresa]
GO
ALTER TABLE [dbo].[empresa_tema]  WITH CHECK ADD  CONSTRAINT [FK_empresa_tema_tema] FOREIGN KEY([id_tema])
REFERENCES [dbo].[temas] ([id_tema])
GO
ALTER TABLE [dbo].[empresa_tema] CHECK CONSTRAINT [FK_empresa_tema_tema]
GO
ALTER TABLE [dbo].[requisitos]  WITH CHECK ADD  CONSTRAINT [FK_empresa_requisito] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[requisitos] CHECK CONSTRAINT [FK_empresa_requisito]
GO
ALTER TABLE [dbo].[responsables]  WITH CHECK ADD  CONSTRAINT [FK_responsable_comite] FOREIGN KEY([id_comite])
REFERENCES [dbo].[comites] ([id_comite])
GO
ALTER TABLE [dbo].[responsables] CHECK CONSTRAINT [FK_responsable_comite]
GO
ALTER TABLE [dbo].[responsables]  WITH CHECK ADD  CONSTRAINT [FK_responsable_empresa] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[responsables] CHECK CONSTRAINT [FK_responsable_empresa]
GO
ALTER TABLE [dbo].[responsables]  WITH CHECK ADD  CONSTRAINT [FK_responsable_profesion] FOREIGN KEY([id_profesion])
REFERENCES [dbo].[profesiones] ([id_profesion])
GO
ALTER TABLE [dbo].[responsables] CHECK CONSTRAINT [FK_responsable_profesion]
GO
ALTER TABLE [dbo].[responsables]  WITH CHECK ADD  CONSTRAINT [FK_responsable_puesto] FOREIGN KEY([id_puesto])
REFERENCES [dbo].[puestos] ([id_puesto])
GO
ALTER TABLE [dbo].[responsables] CHECK CONSTRAINT [FK_responsable_puesto]
GO
ALTER TABLE [dbo].[sitios]  WITH CHECK ADD  CONSTRAINT [FK_empresa_sitio] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[sitios] CHECK CONSTRAINT [FK_empresa_sitio]
GO
ALTER TABLE [dbo].[telefonos]  WITH CHECK ADD  CONSTRAINT [FK_empresa_telefono] FOREIGN KEY([id_empresa])
REFERENCES [dbo].[empresas] ([id_empresa])
GO
ALTER TABLE [dbo].[telefonos] CHECK CONSTRAINT [FK_empresa_telefono]
GO
