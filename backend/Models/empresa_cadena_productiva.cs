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
    
    public partial class empresa_cadena_productiva
    {
        public int id_empresa_cadena_productiva { get; set; }
        public Nullable<int> id_empresa { get; set; }
        public Nullable<int> id_cadena_productiva { get; set; }
    
        public virtual empresas empresas { get; set; }
    }
}
