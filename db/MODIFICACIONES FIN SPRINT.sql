CREATE TABLE causas_baja(
	id_causa_baja INT PRIMARY KEY IDENTITY(1,1),
	nombre VARCHAR(255),
	activo BIT,
	baja BIT,
	fecha_actualizacion DATETIME
)GO

SELECT * FROM causas_baja

ALTER TABLE empresas
	ADD 
		id_causa_baja INT,
		comentario_baja VARCHAR(512),
		codigo_empresa VARCHAR(64),
		comentario_aceptado VARCHAR(512);
GO

ALTER TABLE empresas
	ADD CONSTRAINT FK_empresa_causa_baja
	FOREIGN KEY (id_causa_baja) REFERENCES causas_baja(id_causa_baja);
GO

select * from empresas

UPDATE empresas SET solicitud_aceptada = 0 

USE [agroalim_qa]
GO
/****** Object:  StoredProcedure [dbo].[sp_get_empresa_detalle_by_id]    Script Date: 17/12/2022 11:03:29 a. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
ALTER PROCEDURE [dbo].[sp_get_empresa_detalle_by_id]
	-- Add the parameters for the stored procedure here
	@pIdEmpresa INTEGER
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
	SELECT
		e.id_empresa,
		e.solicitud_aceptada,
		e.solicitud_rechazada,
		e.razon_social,
		e.rfc,
		e.nombre_comercial,
		e.fecha_solicitud,
		d.calle,
		d.codigo_postal,
		t.telefono,
		s.sitio,
		de.descripcion,
		de.productos,
		de.servicios,
		de.numero_empleados,
		de.exporta,
		de.en_proceso_exportacion,
		de.paises_exportacion,
		de.sugerencia AS sugerencia_cluster,
		(SELECT f.nombre FROM facturacion f WHERE f.id_facturacion = de.id_facturacion) facturacion,
		(SELECT o.nombre FROM organizaciones o WHERE o.id_organizacion = eo.id_organizacion) organizacion,
		eo.comentario as comentario_organizacion
	FROM empresas e 
		INNER JOIN domicilios d ON e.id_empresa = d.id_empresa
		INNER JOIN telefonos t ON e.id_empresa = t.id_empresa
		INNER JOIN sitios s ON e.id_empresa = s.id_empresa
		INNER JOIN detalles_empresa de ON e.id_empresa = de.id_empresa
		INNER JOIN empresa_organizacion eo ON e.id_empresa = eo.id_empresa
	WHERE 
		e.id_empresa = @pIdEmpresa AND 
		e.baja = 0
END