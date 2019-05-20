using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Entites
{
    public class TaskDetail
    {
        [Key]
        public int Task_ID { get; set; }
        public int Parent_ID {get;set;}
        public string TaskDesc { get; set; }
        public DateTime Start_Date { get; set; }
        public DateTime End_Date { get; set; }
        public int Priority { get; set; }
        [ForeignKey("Parent_ID")]
        public virtual ParentTask ParentTask { get; set; }
    }
}
