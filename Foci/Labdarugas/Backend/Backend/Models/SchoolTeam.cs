using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    [Table("school_teams")]
    public class SchoolTeam
    {
        public int Id { get; set; }
        [Column("team_name")]
        public string TeamName { get; set; }
        [Column("team_group")]
        public string TeamGroup { get; set; }
        public int Wins { get; set; }
        [Column("image_url")]
        public string ImageUrl { get; set; }
    }
}