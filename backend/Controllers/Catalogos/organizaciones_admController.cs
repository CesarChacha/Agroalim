using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class organizaciones_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<organizaciones> Get()
        {
            return db.organizaciones.ToList();
        }

        public organizaciones Get(int pk)
        {
            return db.organizaciones.Find(pk);
        }

        public organizaciones Post(string nombre)
        {
            organizaciones organizacion = new organizaciones();
            organizacion.nombre = nombre;
            organizacion.activo = true;
            organizacion.baja = false;
            organizacion.fecha_actualizacion = DateTime.Now;
            organizacion = db.organizaciones.Add(organizacion);
            db.SaveChanges();
            return organizacion;
        }
        public organizaciones Put([FromBody] organizaciones data)
        {
            organizaciones organizacion = db.organizaciones.Find(data.id_organizacion);
            organizacion.nombre = data.nombre;
            organizacion.activo = data.activo;
            organizacion.baja = data.baja;
            organizacion.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return organizacion;
        }
    }
}
