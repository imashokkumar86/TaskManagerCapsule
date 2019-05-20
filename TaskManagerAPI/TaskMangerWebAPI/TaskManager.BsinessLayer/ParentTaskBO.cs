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
    public class ParentTaskBO : IMaintanable<ParentTask>
    {
        private TaskManagercontext db;
        public ParentTaskBO()
        {
            db = new TaskManagercontext();
        }
        public void Create(ParentTask obj)
        {
            try
            {
                db.ParentTasks.Add(obj);
                db.SaveChanges();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public bool Delete(int key)
        {
            bool status = false;
            try
            {
                ParentTask obj = db.ParentTasks.Find(key);
                db.ParentTasks.Remove(obj);
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                status = false;
            }
            return status;
        }

        public List<ParentTask> GetAll()
        {
            return db.ParentTasks.ToList();
        }

        public ParentTask Retrieve(int key)
        {
            return db.ParentTasks.Find(key);
        }

        public bool Update(ParentTask obj)
        {
            bool status = false;
            try
            {
                db.Entry(obj).State = EntityState.Modified;
                db.SaveChanges();
                status = true;
            }
           catch(Exception ex)
            {
                status = false;
            }
            return status;
        }
    }
}   
