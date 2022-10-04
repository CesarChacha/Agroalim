using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class normas_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<normas> Get()
        {
            return db.normas.ToList();
        }

        public normas Get(int pk)
        {
            return db.normas.Find(pk);
        }

        public normas Post(string nombre)
        {
            normas norma = new normas();
            norma.nombre = nombre;
            norma.activo = true;
            norma.baja = false;
            norma.fecha_actualizacion = DateTime.Now;
            norma = db.normas.Add(norma);
            db.SaveChanges();
            return norma;
        }
        public normas Put([FromBody] normas data)
        {
            normas norma = db.normas.Find(data.id_norma);
            norma.nombre = data.nombre;
            norma.activo = data.activo;
            norma.baja = data.baja;
            norma.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return norma;
        }

    }
}
