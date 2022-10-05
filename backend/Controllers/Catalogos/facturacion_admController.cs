using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class facturacion_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<facturacion> Get()
        {
            return db.facturacion.ToList();
        }

        public facturacion Get(int pk)
        {
            return db.facturacion.Find(pk);
        }

        public facturacion Post(string nombre)
        {
            facturacion facturacion = new facturacion();
            facturacion.nombre = nombre;
            facturacion.activo = true;
            facturacion.baja = false;
            facturacion.fecha_actualizacion = DateTime.Now;
            facturacion = db.facturacion.Add(facturacion);
            db.SaveChanges();
            return facturacion;
        }
        public facturacion Put([FromBody] facturacion data)
        {
            facturacion facturacion = db.facturacion.Find(data.id_facturacion);
            facturacion.nombre = data.nombre;
            facturacion.activo = data.activo;
            facturacion.baja = data.baja;
            facturacion.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return facturacion;
        }
    }
}
