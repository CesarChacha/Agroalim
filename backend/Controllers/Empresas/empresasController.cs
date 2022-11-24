using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using backend.Models;
using backend.Models.custom;

namespace backend.Controllers.Empresas
{
    public class empresasController : ApiController
    {
        private bdEntities db = new bdEntities();

        // GET: api/empresas
        public IQueryable<empresas> Get()
        {
            return db.empresas.Where(e => e.solicitud_aceptada == true && e.baja == false && e.activo == true).OrderByDescending(e => e.fecha_actualizacion);
        }


        // POST: api/empresas
        [ResponseType(typeof(empresas))]
        public empresas Postempresas(EmpresaForm formulario)
        {
            DateTime hoy = DateTime.Now;

            empresas empresa = new empresas();
            empresa.activo = true;
            empresa.baja = false;
            empresa.solicitud_aceptada = false;
            empresa.solicitud_rechazada = false;
            empresa.fecha_actualizacion = hoy;
            empresa.fecha_solicitud = hoy;
            empresa.nombre_comercial = formulario.nombre;
            empresa.razon_social = formulario.razon_social;
            empresa.rfc = formulario.rfc;
            empresa = db.empresas.Add(empresa);
            db.SaveChanges();

            domicilios domicilio = new domicilios();
            domicilio.id_empresa = empresa.id_empresa;
            domicilio.calle = formulario.calle_numero + ", " + formulario.municipio + ", " + formulario.estado;
            domicilio.numero = "";
            domicilio.codigo_postal = formulario.codigo_postal;
            domicilio.activo = true;
            domicilio.baja = false;
            domicilio.fecha_actualizacion = hoy;
            db.domicilios.Add(domicilio);

            telefonos telefono = new telefonos();
            telefono.activo = true;
            telefono.baja = false;
            telefono.fecha_actualizacion = hoy;
            telefono.id_empresa = empresa.id_empresa;
            telefono.telefono = formulario.telefono;
            db.telefonos.Add(telefono);

            sitios sitio = new sitios();
            sitio.activo = true;
            sitio.baja = false;
            sitio.fecha_actualizacion = hoy;
            sitio.id_empresa = empresa.id_empresa;
            sitio.sitio = formulario.sitio;
            db.sitios.Add(sitio);

            
            foreach (ResponsableForm item in formulario.responsables_cluster)
            {
                backend.Models.responsables responsable = new backend.Models.responsables();
                responsable.id_empresa = empresa.id_empresa;
                responsable.fecha_actualizacion = hoy;
                responsable.activo = true;
                responsable.baja = false;
                responsable.nombre = item.nombre;
                responsable.apellido = item.apellido;
                responsable.correo = item.correo;
                responsable.telefono_oficina = item.telefono_oficina;
                responsable.telefono_whatsapp = item.telefono_whatsapp;
                responsable.id_comite = item.id_comite;
                responsable.id_puesto = null;
                responsable.id_profesion = null;
                db.responsables.Add(responsable);
            }
            foreach (ResponsableForm item in formulario.responsables_comite)
            {
                backend.Models.responsables responsable = new backend.Models.responsables();
                responsable.id_empresa = empresa.id_empresa;
                responsable.fecha_actualizacion = hoy;
                responsable.activo = true;
                responsable.baja = false;
                Int32.TryParse(item.puesto, out int id_puesto);
                Int32.TryParse(item.profesion, out int id_profesion);
                responsable.nombre = item.nombre;
                responsable.apellido = item.apellido;
                responsable.correo = item.correo;
                responsable.telefono_oficina = item.telefono_oficina;
                responsable.telefono_whatsapp = item.telefono_whatsapp;
                responsable.id_comite = item.id_comite;
                responsable.id_puesto = id_puesto;
                responsable.id_profesion = id_profesion;
                db.responsables.Add(responsable);
            }

            foreach (var item in formulario.cadena_productiva)
            {
                empresa_cadena_productiva newECP = new empresa_cadena_productiva();
                newECP.id_empresa = empresa.id_empresa;
                newECP.id_cadena_productiva = item;
                db.empresa_cadena_productiva.Add(newECP);
            }

            
            foreach (var item in formulario.normas)
            {
                empresa_norma newEN = new empresa_norma();
                newEN.id_empresa = empresa.id_empresa;
                newEN.id_norma = item;
                db.empresa_norma.Add(newEN);
            }

            empresa_organizacion newEO = new empresa_organizacion();
            newEO.id_empresa = empresa.id_empresa;
            newEO.id_organizacion = formulario.organizaciones;
            newEO.comentario = formulario.comentario;
            db.empresa_organizacion.Add(newEO);

            foreach (var item in formulario.temas)
            {
                empresa_tema newET = new empresa_tema();
                newET.id_empresa = empresa.id_empresa;
                newET.id_tema = item;
                db.empresa_tema.Add(newET);
            }

            detalles_empresa detEmp = new detalles_empresa();
            detEmp.id_empresa = empresa.id_empresa;
            detEmp.descripcion = formulario.descripcion;
            detEmp.productos = false;
            detEmp.servicios = false;
            foreach (var item in formulario.tipo_negocio)
            {
                if (item.Equals("Productos"))
                {
                    detEmp.productos = true;
                }
                else if (item.Equals("Servicios"))
                {
                    detEmp.servicios = true;
                }
            }
            Int32.TryParse(formulario.numero_empleados, out int numero_empleados);
            detEmp.numero_empleados = numero_empleados;
            detEmp.id_facturacion = formulario.facturacion_anual;
            detEmp.paises_exportacion = formulario.paises_exporta;
            detEmp.exporta = formulario.exporta.Equals("Si") ? true : false;
            detEmp.sugerencia = formulario.sugerencia;
            db.detalles_empresa.Add(detEmp);

            try
            {
                db.SaveChanges();
                return empresa;
            }
            catch (Exception e)
            {
               
                return null;
                throw;
            }
        }

       
    }
}