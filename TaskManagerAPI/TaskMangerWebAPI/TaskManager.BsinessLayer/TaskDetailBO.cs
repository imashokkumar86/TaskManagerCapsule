using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TaskManager.DataLayer;
using TaskManager.Entites;

namespace TaskManager.BusinessLayer
{
    public class TaskDetailBO : IMaintanable<TaskDetail>
    {
        private TaskManagercontext db;
        public TaskDetailBO()
        {
            db = new TaskManagercontext();
        }
        public void Create(TaskDetail obj)
        {
            try
            {
                db.TaskDetails.Add(obj);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool Delete(int key)
        {
            bool status = false;
            try
            {
                TaskDetail obj = db.TaskDetails.Find(key);
                db.TaskDetails.Remove(obj);
                db.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public List<TaskDetail> GetAll()
        {
            return db.TaskDetails.ToList();
        }

        public TaskDetail Retrieve(int key)
        {
            return db.TaskDetails.Find(key);
        }

        public bool Update(TaskDetail obj)
        {
            bool status = false;
            try
            {
                db.Entry(obj).State = EntityState.Modified;
                db.SaveChanges();
                status = true;
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
         }
    }
}
