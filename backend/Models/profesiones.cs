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
    
    public partial class profesiones
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public profesiones()
        {
            this.responsables = new HashSet<responsables>();
        }
    
        public int id_profesion { get; set; }
        public string nombre { get; set; }
        public bool activo { get; set; }
        public bool baja { get; set; }
        public System.DateTime fecha_actualizacion { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<responsables> responsables { get; set; }
    }
}