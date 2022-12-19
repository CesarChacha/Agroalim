using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Empresas
{
    public class existe_rfcController : ApiController
    {
        private bdEntities db = new bdEntities();

        public bool Get(string rfc)
        {
            int res = db.empresas.Where(e => e.rfc == rfc).Count();

            return res == 0 ? false : true;

        }
    }
}
