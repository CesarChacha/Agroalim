using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.responsables
{
    public class responsablesComitesController : ApiController
    {
        bdEntities db = new bdEntities();

        public IQueryable<responsables_comites_view> Get(int id)
        {
            return db.responsables_comites_view.Where(res => res.id_empresa == id);
        }
    }
}
