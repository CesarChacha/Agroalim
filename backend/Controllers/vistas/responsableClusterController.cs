using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.responsables
{
    public class responsableClusterController : ApiController
    {

        bdEntities db = new bdEntities();

        public IQueryable<responsables_cluster_view> Get(int id)
        {
            return db.responsables_cluster_view.Where(res => res.id_empresa == id);
        }
    }
}
