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
        public string TeamName { get; set; }
        public string TeamGroup { get; set; }
        public int Wins { get; set; }
        public string ImageUrl { get; set; }
    }
    public class SchoolTeamsController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            using(var ctx = new ApiContext())
            {
                return Ok(ctx.SchoolTeams.ToList());
            }
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] TeniszezokModel value)
        {
            using(var ctx = new ApiContext())
            {
                var team = new SchoolTeam
                {
                    TeamName = value.TeamName,
                    TeamGroup = value.TeamGroup,
                    Wins = value.Wins,
                    ImageUrl = value.ImageUrl
                };
                team = ctx.SchoolTeams.Add(team);
                ctx.SaveChanges();
                return Content(HttpStatusCode.Created, team);
            }
        }

    }
}