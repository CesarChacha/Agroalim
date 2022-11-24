using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class profesionesController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<profesiones> Gettemas()
        {
            return db.profesiones.Where(c => (c.activo) == true).OrderByDescending(c => c.fecha_actualizacion);
        }
    }
}
