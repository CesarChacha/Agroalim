using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Empresas
{
    public class existe_codigoController : ApiController
    {
        private bdEntities db = new bdEntities();

        public bool Get(string code)
        {
            int res = db.empresas.Where(e => e.codigo_empresa == code).Count();

            return res == 0 ? false : true;

        }
    }
}
