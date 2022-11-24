using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.vistas
{
    public class empresaNormaController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/sitios
        public IQueryable<backend.Models.empresa_norma_view> Get(int id)
        {
            return db.empresa_norma_view.Where(en => en.id_empresa == id);
        }
    }
}
