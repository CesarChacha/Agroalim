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
    
    public partial class normas
    {
        public int id_norma { get; set; }
        public string nombre { get; set; }
        public Nullable<bool> activo { get; set; }
        public Nullable<bool> baja { get; set; }
        public Nullable<System.DateTime> fecha_actualizacion { get; set; }
    }
}
