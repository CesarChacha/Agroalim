using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class LoginData
    {
        public String user { get; set; }
        public String password { get; set; }
        public String token { get; set; }
        public String nombre { get; set; }
        public String apellido { get; set; }
    }
}