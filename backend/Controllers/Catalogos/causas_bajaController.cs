using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Catalogos
{
    public class causas_bajaController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<causas_baja> Gettemas()
        {
            return db.causas_baja.Where(c => (c.activo) == true).OrderByDescending(c => c.fecha_actualizacion);
        }
    }
}
