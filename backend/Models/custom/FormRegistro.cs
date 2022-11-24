using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class FormRegistro
    {
        public string nombre_comercial { get; set; }
        public string razon_social { get; set; }
        public string rfc { get; set; }
        public int[] cadena_productiva { get; set; }
        public int[] normas { get; set; }
        public int[] temas { get; set; }
        public telefonos[] telefonos { get; set; }
        public sitios[] sitios { get; set; }
        public responsables[] responsables_cluster { get; set; }
        public responsables[] responsables_comite { get; set; }
        public string descripcion { get; set; }
        public string calle_numero { get; set; }
        public string codigo_postal { get; set; }
        public string colonia { get; set; }
        public string municipio { get; set; }
        public string estado { get; set; }
        public string tipo_negocio { get; set; }
        public int numero_empleados { get; set; }
        public int facturacion_anual { get; set; }
        public int organizaciones { get; set; }
        public string comentario { get; set; }
        public string paises_exporta { get; set; }
        public string sugerencia { get; set; }
        public string exporta { get; set; }

    }
}