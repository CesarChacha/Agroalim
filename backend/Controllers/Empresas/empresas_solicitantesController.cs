using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Models;

namespace backend.Controllers.Empresas
{
    public class empresas_solicitantesController : ApiController
    {
        private bdEntities db = new bdEntities();

        public IQueryable<empresas> Get()
        {
            return db.empresas.Where(e => e.solicitud_aceptada == false).OrderByDescending(e => e.fecha_actualizacion);
        }
        
    }
}