using backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity.Validation;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class temas_admController : ApiController
    {
        bdEntities db = new bdEntities();

        public List<temas> Get()
        {
            return db.temas.ToList();
        }

        public temas Get(int pk)
        {
            return db.temas.Find(pk);
        }

        public temas Post(string nombre)
        {
            temas tema = new temas();
            tema.nombre = nombre;
            tema.activo = true;
            tema.baja = false;
            tema.fecha_actualizacion = DateTime.Now;
            tema = db.temas.Add(tema);
            db.SaveChanges();
            return tema;
        }
        public temas Put([FromBody] temas data)
        {
            temas tema = db.temas.Find(data.id_tema);
            tema.nombre = data.nombre;
            tema.activo = data.activo;
            tema.baja = data.baja;
            tema.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return tema;
        }
    }
}
