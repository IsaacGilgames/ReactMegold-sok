using Backend.Database;
using Backend.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Backend.Controllers
{
    public class TeniszezokModel
    {
        public string Nev { get; set; }
        public string Csoport { get; set; }
        public int Gyozelem { get; set; }
        public string Fenykep { get; set; }
    }
    public class TeniszezokController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            using(var ctx = new ApiContext())
            {
                return Ok(ctx.Teniszezok.ToList());
            }
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] TeniszezokModel value)
        {
            using(var ctx = new ApiContext())
            {
                var teniszezo = new Teniszezok
                {
                    Nev = value.Nev,
                    Csoport = value.Csoport,
                    Gyozelem = value.Gyozelem,
                    Fenykep = value.Fenykep
                };
                teniszezo = ctx.Teniszezok.Add(teniszezo);
                ctx.SaveChanges();
                return Content(HttpStatusCode.Created, teniszezo);
            }
        }

    }
}