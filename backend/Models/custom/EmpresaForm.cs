using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class EmpresaForm
    {
        public string nombre { get; set; }
        public string razon_social { get; set; }
        public string rfc { get; set; }
        public string telefono { get; set; }
        public string sitio { get; set; }
        public string calle_numero { get; set; }
        public string codigo_postal { get; set; }
        public string colonia { get; set; }
        public string municipio { get; set; }
        public string estado { get; set; }
        public string descripcion { get; set; }
        public string [] tipo_negocio { get; set; }
        public int [] cadena_productiva { get; set; }
        public string numero_empleados { get; set; }
        public int facturacion_anual { get; set; }
        public int organizaciones { get; set; }
        public string comentario { get; set; }
        public string exporta { get; set; }
        public string paises_exporta { get; set; }
        public int [] normas { get; set; }
        public int [] temas { get; set; }
        public string sugerencia { get; set; }
        public ResponsableForm[] responsables_cluster { get; set; }
        public ResponsableForm[] responsables_comite { get; set; }
    }

    public class ResponsableForm
    {
        public string apellido { get; set; }
        public string correo { get; set; }
        public string nombre { get; set; }
        public string telefono_oficina { get; set; }
        public string telefono_whatsapp { get; set; }
        public string profesion { get; set; }
        public string puesto { get; set; }
        public int id_comite { get; set; }
    }
}