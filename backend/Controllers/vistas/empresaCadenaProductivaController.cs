using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.cadena_productiva
{
    public class empresaCadenaProductivaController : ApiController
    {
        bdEntities db = new bdEntities();

        public IQueryable<backend.Models.cadena_productiva_view> Get(int id)
        {
            return db.cadena_productiva_view.Where(cp => cp.id_empresa == id);
        }
    }
}
