using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class AceptarEmpresaDTO
    {
        public string codigo_empresa { get; set; } 
        public string comentario_aceptado { get; set; } 
        public int id_empresa { get; set; }
    }
}