using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class temasController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<temas> Gettemas()
        {
            return db.temas.Where(c => (c.activo) == true).OrderByDescending( c => c.fecha_actualizacion);
        }
    }
}
