CREATE VIEW responsables_comites_view
AS
SELECT 
	r.id_empresa,
	r.id_responsable,
	r.nombre,
	r.apellido,
	r.correo,
	r.telefono_oficina,
	r.telefono_whatsapp,
	(SELECT nombre FROM comites c WHERE c.id_comite = r.id_comite) as comite,
	(SELECT nombre FROM puestos ps WHERE ps.id_puesto = r.id_puesto) as puesto,
	(SELECT nombre FROM profesiones pf WHERE pf.id_profesion = r.id_profesion) as profesion
FROM responsables r
WHERE 
	id_profesion >= 1
	AND id_puesto >= 1