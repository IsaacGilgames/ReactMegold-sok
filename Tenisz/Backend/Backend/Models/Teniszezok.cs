using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Backend.Models
{
    public class Teniszezok
    {
        public long Id { get; set; }
        public string Nev { get; set; }
        public string Csoport { get; set; }
        public int Gyozelem { get; set; }
        public string Fenykep { get; set; }
    }
}