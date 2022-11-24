using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class comitesController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<comites> Gettemas()
        {
            return db.comites.Where(c => (c.activo) == true).OrderByDescending(c => c.fecha_actualizacion);
        }
    }
}
