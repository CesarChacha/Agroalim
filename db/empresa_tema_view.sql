CREATE VIEW empresa_tema_view
AS
SELECT 
	 et.id_empresa_tema,
	 et.id_empresa,
	 (SELECT t.nombre FROM temas t WHERE t.id_tema = et.id_tema) nombre
FROM empresa_tema et