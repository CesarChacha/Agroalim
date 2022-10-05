using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace backend.Controllers.Catalogos
{
    public class puestosController : Controller
    {
        // GET: puestos
        public ActionResult Index()
        {
            return View();
        }

        // GET: puestos/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: puestos/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: puestos/Create
        [HttpPost]
        public ActionResult Create(FormCollection collection)
        {
            try
            {
                // TODO: Add insert logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: puestos/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: puestos/Edit/5
        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        // GET: puestos/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: puestos/Delete/5
        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here

                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }
    }
}
