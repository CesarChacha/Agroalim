using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class comites_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<comites> Get()
        {
            return db.comites.ToList();
        }

        public comites Get(int pk)
        {
            return db.comites.Find(pk);
        }

        public comites Post(string nombre)
        {
            comites comite = new comites();
            comite.nombre = nombre;
            comite.activo = true;
            comite.baja = false;
            comite.fecha_actualizacion = DateTime.Now;
            comite = db.comites.Add(comite);
            db.SaveChanges();
            return comite;
        }
        public comites Put([FromBody] comites data)
        {
            comites comite = db.comites.Find(data.id_comite);
            comite.nombre = data.nombre;
            comite.activo = data.activo;
            comite.baja = data.baja;
            comite.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return comite;
        }
    }
}
