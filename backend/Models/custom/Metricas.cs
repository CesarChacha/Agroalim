using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace backend.Models.custom
{
    public class Metricas
    {
        public Metricas(int aceptadas, int pendientes, int rechazadas, int totales, float indice_aceptacion)
        {
            this.aceptadas = aceptadas;
            this.pendientes = pendientes;
            this.rechazadas = rechazadas;
            this.totales = totales;
            this.indice_aceptacion = indice_aceptacion;
        }

        public int aceptadas { get; set; }
        public int pendientes { get; set; }
        public int rechazadas { get; set; }
        public int totales { get; set; }
        public float indice_aceptacion { get; set; }
    }
}