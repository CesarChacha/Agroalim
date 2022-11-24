SELECT * FROM detalles_empresa
SELECT * FROM domicilios
SELECT * FROM telefonos
SELECT * FROM sitios
SELECT * FROM empresas
SELECT * FROM empresa_cadena_productiva
SELECT * FROM empresa_norma
SELECT * FROM empresa_tema
SELECT * FROM empresa_organizacion
select * from responsables
select * from requisitos

DELETE FROM requisitos
DELETE FROM empresa_cadena_productiva
DELETE FROM empresa_norma
DELETE FROM empresa_organizacion
DELETE FROM empresa_tema
DELETE FROM detalles_empresa
DELETE FROM telefonos
DELETE FROM sitios
DELETE FROM responsables
DELETE FROM domicilios
DELETE FROM empresas

UPDATE empresas SET id_empresa = 4 WHERE id_empresa = 13

SELECT * FROM empresas

CREATE VIEW empresa_view
AS 
SELECT 
	e.id_empresa,
	e.solicitud_aceptada,
	e.razon_social,
	e.rfc,
	e.nombre_comercial,
	e.solicitud_aceptada,
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
	de.sugerencia,
	(SELECT f.nombre FROM facturacion f WHERE f.id_facturacion = de.id_facturacion) facturacion,
	(SELECT o.nombre FROM organizaciones o WHERE o.id_organizacion = eo.id_organizacion) organizacion,
	eo.comentario
FROM empresas e 
	INNER JOIN domicilios d ON e.id_empresa = d.id_empresa
	INNER JOIN telefonos t ON e.id_empresa = t.id_empresa
	INNER JOIN sitios s ON e.id_empresa = s.id_empresa
	INNER JOIN detalles_empresa de ON e.id_empresa = de.id_empresa
	INNER JOIN empresa_organizacion eo ON e.id_empresa = eo.id_empresa

SELECT 
	r.id_responsable,
	r.nombre,
	r.apellido,
	r.correo,
	r.telefono_oficina,
	r.telefono_whatsapp,
	(SELECT nombre FROM comites c WHERE c.id_comite = r.id_comite) as puesto
FROM responsables r
WHERE 
	id_profesion IS NULL
	AND id_puesto IS NULL
	AND id_empresa = 15

SELECT 
	 ecp.id_empresa_cadena_productiva,
	 ecp.id_empresa,
	 (SELECT cp.nombre FROM cadena_productiva cp WHERE cp.id_cadena_productiva = ecp.id_cadena_productiva) nombre
FROM empresa_cadena_productiva ecp

SELECT * FROM empresa_norma
SELECT 
	 en.id_empresa_norma,
	 en.id_empresa,
	 (SELECT n.nombre FROM normas n WHERE n.id_norma = en.id_norma) nombre
FROM empresa_norma en

SELECT 
	 et.id_empresa_tema,
	 et.id_empresa,
	 (SELECT t.nombre FROM temas t WHERE t.id_tema = et.id_tema) nombre
FROM empresa_tema et

SELECT * FROM requisitos

SELECT
(SELECT COUNT(*) FROM empresas WHERE solicitud_aceptada = 1) aceptados,
(SELECT COUNT(*) FROM empresas WHERE solicitud_aceptada = 0) pendientes