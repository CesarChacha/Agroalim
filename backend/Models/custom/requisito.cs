using Microsoft.AspNetCore.Http;
using System.Text.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class Requisito
    {
        public int Id_empresa { get; set; }

        public IFormFile File { get; set; }
    }
}