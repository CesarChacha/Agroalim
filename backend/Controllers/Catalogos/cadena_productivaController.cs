using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class cadena_productivaController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<backend.Models.cadena_productiva> Gettemas()
        {
            return db.cadena_productiva.Where(c => (c.activo)==true).OrderByDescending(c => c.fecha_actualizacion);
        }
    }
}
