using backend.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace backend.Controllers.Requisitos
{
    public class requisitosController : ApiController
    {
        private bdEntities db = new bdEntities();

        public IQueryable<requisitos> Get(int id)
        {
            return db.requisitos.Where(req => req.id_empresa == id);
        }

        public async Task<HttpResponseMessage> PostFormData(int id)
        {
            // Check if the request contains multipart/form-data.
            if (!Request.Content.IsMimeMultipartContent())
            {
                throw new HttpResponseException(HttpStatusCode.UnsupportedMediaType);
            }

            string root = HttpContext.Current.Server.MapPath("/Files");
            var provider = new MultipartFormDataStreamProvider(root);

            try
            {
                // Read the form data.
                await Request.Content.ReadAsMultipartAsync(provider);

                // This illustrates how to get the file names.
                foreach (MultipartFileData file in provider.FileData)
                {

                    /**
                     * AQUI GUARDAR A BASE DE DATOS
                     **/
                    requisitos temp = new requisitos();
                    temp.id_empresa = id;
                    temp.file_name = file.Headers.ContentDisposition.FileName.Replace("\"","");
                    temp.media_type = file.Headers.ContentType.MediaType;
                    temp.local_file_name = file.LocalFileName;
                    db.requisitos.Add(temp);
                    db.SaveChanges();
                    /**
                     * AQUI GUARDAR A BASE DE DATOS
                     **/
                }
                return Request.CreateResponse(HttpStatusCode.OK);
            }
            catch (System.Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
