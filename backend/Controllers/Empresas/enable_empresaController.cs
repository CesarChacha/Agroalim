using backend.Models;
using backend.Models.custom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Empresas
{
    public class enable_empresaController : ApiController
    {
        private bdEntities db = new bdEntities();
        public empresas Put([FromBody] DeshabilitarEmpresaDTO data)
        {
            empresas empresa = db.empresas.Find(data.id_empresa);
            empresa.id_causa_baja = data.id_causa_baja;
            empresa.comentario_baja = data.comentario_baja;
            empresa.activo = true;
            empresa.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();
            return empresa;
        }
    }
}
