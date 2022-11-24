CREATE VIEW empresa_norma_view
AS
SELECT 
	 en.id_empresa_norma,
	 en.id_empresa,
	 (SELECT n.nombre FROM normas n WHERE n.id_norma = en.id_norma) nombre
FROM empresa_norma en