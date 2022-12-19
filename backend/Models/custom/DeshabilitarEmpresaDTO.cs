
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class DeshabilitarEmpresaDTO
    {
        public int id_empresa { get; set; }
        public int id_causa_baja { get; set; }
        public string comentario_baja { get; set; }
    }
}