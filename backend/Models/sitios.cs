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
    
    public partial class sitios
    {
        public int id_sitios { get; set; }
        public string sitio { get; set; }
        public bool activo { get; set; }
        public bool baja { get; set; }
        public System.DateTime fecha_actualizacion { get; set; }
    
        public virtual empresas empresas { get; set; }
    }
}