using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class actividades_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<actividades> Get()
        {
            return db.actividades.ToList();
        }

        public actividades Get(int pk)
        {
            return db.actividades.Find(pk);
        }

        public actividades Post(string nombre)
        {
            actividades actividad = new actividades();
            actividad.nombre = nombre;
            actividad.activo = true;
            actividad.baja = false;
            actividad.fecha_actualizacion = DateTime.Now;
            actividad = db.actividades.Add(actividad);
            db.SaveChanges();
            return actividad;
        }
        public actividades Put([FromBody] actividades data)
        {
            actividades actividad = db.actividades.Find(data.id_actividad);
            actividad.nombre = data.nombre;
            actividad.activo = data.activo;
            actividad.baja = data.baja;
            actividad.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return actividad;
        }
    }
}
