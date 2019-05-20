using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.Entites
{
    public class ParentTask
    {
        [Key]
        public int Parent_ID { get; set; }
        public string Parent_Task { get; set; }
       // public virtual ICollection<TaskDetail> Tasks { get; set; }
    }
}
