using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class normasController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<normas> Gettemas()
        {
            return db.normas.Where(c => (c.activo) == true).OrderByDescending(c => c.fecha_actualizacion);
        }
    }
}
