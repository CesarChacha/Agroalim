using backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Empresas
{
    public class empresaController : ApiController
    {
        private bdEntities db = new bdEntities();

        public sp_get_empresa_detalle_by_id_Result Get(int id)
        {
            return db.sp_get_empresa_detalle_by_id(id).First();
        }
    }
}
