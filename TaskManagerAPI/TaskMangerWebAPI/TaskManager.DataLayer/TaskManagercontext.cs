using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.Entites;

namespace TaskManager.DataLayer
{
    public class TaskManagercontext :DbContext
    {

        public TaskManagercontext() : base("TaskManagerDB") { }
        public virtual DbSet<ParentTask> ParentTasks { get; set; }
        public virtual DbSet<TaskDetail> TaskDetails { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ParentTask>().HasKey(t => t.Parent_ID); //primary key defination  
            modelBuilder.Entity<ParentTask>().Property(t => t.Parent_ID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);  //identity col            
            modelBuilder.Entity<TaskDetail>().HasKey(s => s.Task_ID);
            modelBuilder.Entity<TaskDetail>().Property(s => s.Task_ID)
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            //modelBuilder.Entity<TaskDetail>().HasRequired(s => s.ParentTask)
            //    .WithMany(s => s.Tasks).HasForeignKey(s => s.Parent_ID); //Foreign Key             
            base.OnModelCreating(modelBuilder);
        }
    }
}
