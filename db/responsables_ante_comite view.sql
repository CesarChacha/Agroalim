CREATE VIEW responsables_cluster_view
AS
SELECT 
	r.id_empresa,
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