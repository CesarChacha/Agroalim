﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class dbEntities : DbContext
    {
        public dbEntities()
            : base("name=dbEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<administradore> administradores { get; set; }
        public virtual DbSet<actividade> actividades { get; set; }
        public virtual DbSet<comite> comites { get; set; }
        public virtual DbSet<domicilio> domicilios { get; set; }
        public virtual DbSet<empresa> empresas { get; set; }
        public virtual DbSet<facturacion> facturacions { get; set; }
        public virtual DbSet<norma> normas { get; set; }
        public virtual DbSet<organizacione> organizaciones { get; set; }
        public virtual DbSet<profesione> profesiones { get; set; }
        public virtual DbSet<puesto> puestos { get; set; }
        public virtual DbSet<responsable> responsables { get; set; }
        public virtual DbSet<sitio> sitios { get; set; }
        public virtual DbSet<telefono> telefonos { get; set; }
        public virtual DbSet<tema> temas { get; set; }
    }
}
