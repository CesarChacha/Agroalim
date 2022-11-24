using backend.Models;
using backend.Models.custom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Dashboard
{
    public class metricasController : ApiController
    {
        private bdEntities db = new bdEntities();

        public Metricas Get()
        {

            int aceptadas = db.empresas.Where(e => e.solicitud_aceptada == true).Count();
            int pendientes = db.empresas.Where(e => e.solicitud_aceptada == false && e.solicitud_rechazada == false).Count();
            int rechazadas = db.empresas.Where(e => e.solicitud_rechazada == true && e.solicitud_aceptada == false).Count();
            int totales = aceptadas + pendientes + rechazadas;
            float indice_aceptacion = 0;// rechazadas / aceptadas;
            Metricas res = new Metricas(aceptadas,pendientes,rechazadas,totales,indice_aceptacion);
            return res;
        }
    }
}
