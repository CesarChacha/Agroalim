using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class LoginData
    {
        public int id_administrador { get; set; }
        public String user { get; set; }
        public String password { get; set; }
        public String token { get; set; }
        public String nombre { get; set; }
        public String apellido { get; set; }
    }
}