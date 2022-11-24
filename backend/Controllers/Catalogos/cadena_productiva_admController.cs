using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class cadena_productiva_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<backend.Models.cadena_productiva> Get()
        {
            return db.cadena_productiva.ToList();
        }

        public backend.Models.cadena_productiva Get(int pk)
        {
            return db.cadena_productiva.Find(pk);
        }

        public backend.Models.cadena_productiva Post(string nombre)
        {
            backend.Models.cadena_productiva cd = new backend.Models.cadena_productiva();
            cd.nombre = nombre;
            cd.activo = true;
            cd.baja = false;
            cd.fecha_actualizacion = DateTime.Now;
            cd = db.cadena_productiva.Add(cd);
            db.SaveChanges();
            return cd;
        }
        public backend.Models.cadena_productiva Put([FromBody] backend.Models.cadena_productiva data)
        {
            backend.Models.cadena_productiva cd = db.cadena_productiva.Find(data.id_cadena_productiva);
            cd.nombre = data.nombre;
            cd.activo = data.activo;
            cd.baja = data.baja;
            cd.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return cd;
        }
    }
}
