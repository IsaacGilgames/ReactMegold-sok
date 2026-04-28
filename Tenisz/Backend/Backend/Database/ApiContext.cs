using Backend.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace Backend.Database
{
    public class ApiContext : DbContext
    {
        public DbSet<Teniszezok> Teniszezok { get; set; }
        public ApiContext() : base("name=ApiContext") { }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}