CREATE VIEW cadena_productiva_view
AS
SELECT 
	 ecp.id_empresa_cadena_productiva,
	 ecp.id_empresa,
	 (SELECT cp.nombre FROM cadena_productiva cp WHERE cp.id_cadena_productiva = ecp.id_cadena_productiva) nombre
FROM empresa_cadena_productiva ecp