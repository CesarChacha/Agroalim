//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace backend.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class domicilio
    {
        public int id_domicilio { get; set; }
        public string calle { get; set; }
        public string numero { get; set; }
        public string codigo_postal { get; set; }
        public bool activo { get; set; }
        public bool baja { get; set; }
        public System.DateTime fecha_actualizacion { get; set; }
        public int id_empresa { get; set; }
    
        public virtual empresa empresa { get; set; }
    }
}
