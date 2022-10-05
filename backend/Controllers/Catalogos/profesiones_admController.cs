using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace backend.Controllers.Catalogos
{
    public class profesiones_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<profesiones> Get()
        {
            return db.profesiones.ToList();
        }

        public profesiones Get(int pk)
        {
            return db.profesiones.Find(pk);
        }

        public profesiones Post(string nombre)
        {
            profesiones profesion = new profesiones();
            profesion.nombre = nombre;
            profesion.activo = true;
            profesion.baja = false;
            profesion.fecha_actualizacion = DateTime.Now;
            profesion = db.profesiones.Add(profesion);
            db.SaveChanges();
            return profesion;
        }

        public profesiones Put([FromBody] profesiones data)
        {
            profesiones profesion = db.profesiones.Find(data.id_profesion);
            profesion.nombre = data.nombre;
            profesion.activo = data.activo;
            profesion.baja = data.baja;
            profesion.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return profesion;
        }
    }
}