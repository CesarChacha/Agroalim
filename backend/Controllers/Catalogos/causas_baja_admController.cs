using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class causas_baja_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<causas_baja> Get()
        {
            return db.causas_baja.ToList();
        }

        public causas_baja Get(int pk)
        {
            return db.causas_baja.Find(pk);
        }

        public causas_baja Post(string nombre)
        {
            causas_baja causa_baja = new causas_baja();
            causa_baja.nombre = nombre;
            causa_baja.activo = true;
            causa_baja.baja = false;
            causa_baja.fecha_actualizacion = DateTime.Now;
            causa_baja = db.causas_baja.Add(causa_baja);
            db.SaveChanges();
            return causa_baja;
        }
        public causas_baja Put([FromBody] causas_baja data)
        {
            causas_baja causa_baja = db.causas_baja.Find(data.id_causa_baja);
            causa_baja.nombre = data.nombre;
            causa_baja.activo = data.activo;
            causa_baja.baja = data.baja;
            causa_baja.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return causa_baja;
        }
    }
}
