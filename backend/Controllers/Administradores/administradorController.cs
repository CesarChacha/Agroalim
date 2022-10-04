using backend.Models;
using backend.Models.custom;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace backend.Controllers.Administradores
{
    public class administradorController : ApiController
    {
        private bdEntities db = new bdEntities();

        public administradores Get(int id)
        {
            administradores admin = db.administradores.Find(id);
            if ((admin.activo == true) &&(admin.baja == false))
            {
                return admin;
            }
            else
            {
                return null;
            }
        }

        public LoginData Put([FromBody]administradores body)
        {
            administradores admin = db.administradores.Find(body.id_administrador);
            admin.nombre = body.nombre;
            admin.apellido = body.apellido;
            admin.correo = body.correo;
            admin.password = body.password;
            admin.fecha_actualizacion = DateTime.Now;
            db.SaveChanges();

            LoginData res = new LoginData();

            res.id_administrador = admin.id_administrador;
            res.nombre = admin.nombre;
            res.apellido = admin.apellido;
            res.user = admin.correo;
            res.password = admin.password;
            res.token = "RSAKEY";

            return res;
        }
    }
}
