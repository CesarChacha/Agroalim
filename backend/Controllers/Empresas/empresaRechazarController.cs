using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Empresas
{
    public class empresaRechazarController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public Boolean Put(int id, string rfc)
        {
            empresas empresa = db.empresas.Find(id);
            empresa.fecha_actualizacion = DateTime.Now;
            empresa.solicitud_rechazada = true;

            try
            {
                db.SaveChanges();
                return true;
            }
            catch (Exception e)
            {
                return false;
                throw;
            }
        }
    }
}
