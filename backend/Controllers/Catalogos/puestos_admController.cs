using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace backend.Controllers.Catalogos
{
    public class puestos_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<puestos> Get()
        {
            return db.puestos.ToList();
        }

        public puestos Get(int pk)
        {
            return db.puestos.Find(pk);
        }

        public puestos Post(string nombre)   
        {
            puestos puesto = new puestos();
            puesto.nombre = nombre;
            puesto.activo = true;
            puesto.baja = false;
            puesto.fecha_actualizacion = DateTime.Now;
            puesto = db.puestos.Add(puesto);
            db.SaveChanges();
            return puesto;
        }
        public puestos Put([FromBody]puestos data)
        {
            puestos puesto = db.puestos.Find(data.id_puesto);
            puesto.nombre = data.nombre;
            puesto.activo = data.activo;
            puesto.baja = data.baja;
            puesto.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return puesto;
        }


    }
}