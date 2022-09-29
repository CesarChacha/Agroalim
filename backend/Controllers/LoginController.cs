using backend.Models;
using backend.Models.custom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers
{
    public class LoginController : ApiController
    {
        bdEntities db = new bdEntities();

        public LoginData Post([FromBody] LoginData data)
        {
            try
            {
                administradores user = db.administradores.First(
                    adm => adm.activo == true &&
                    adm.baja == false &&
                    adm.correo == data.user &&
                    adm.password == data.password
                );

                LoginData res = data;
                res.nombre = user.nombre;
                res.apellido = user.apellido;
                res.token = "RSAKEY";

                return res;

            }
            catch(Exception e)
            {
                return null;
            }
            
        }
    }
}
