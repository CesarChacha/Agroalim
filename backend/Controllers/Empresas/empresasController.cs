using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Empresas
{
    public class empresasController : ApiController
    {
        private bdEntities db = new bdEntities();

        public IQueryable<empresas> Get()
        {
            return db.empresas.Where(e => e.solicitud_aceptada == true && e.baja == false  && e.activo == true).OrderByDescending(e => e.fecha_actualizacion);
        }

    }
}
