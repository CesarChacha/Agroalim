-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE sp_get_empresa_detalle
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
		e.activo = 1 AND 
		e.baja = 0
END
GO


exec sp_get_empresa_detalle 15