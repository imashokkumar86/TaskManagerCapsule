using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TaskManager.BusinessLayer;
using TaskManager.Entites;

namespace TaskMangerWebAPI.Controllers
{
    
    public class ParentController : ApiController
    {
        private ParentTaskBO parentTaskBO;
            public ParentController()
        {
            parentTaskBO = new ParentTaskBO();
        }
        // GET: api/Parent
        public List<ParentTask> GetParentTasks()
        {
            return parentTaskBO.GetAll();
        }

        // GET: api/Parent/5
        [ResponseType(typeof(ParentTask))]
        public IHttpActionResult GetParentTask(int id)
        {
            ParentTask parentTask = parentTaskBO.Retrieve(id);
            if (parentTask == null)
            {
                return NotFound();
            }

            return Ok(parentTask);
        }

        // PUT: api/Parent/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutParentTask(int id, ParentTask parentTask)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != parentTask.Parent_ID)
            {
                return BadRequest();
            }
           
            bool status=parentTaskBO.Update(parentTask);
            
            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Parent
        [ResponseType(typeof(ParentTask))]
        public IHttpActionResult PostParentTask(ParentTask parentTask)
        {
            if (!ModelState.IsValid && parentTask.Parent_ID != 0)
            {
                return BadRequest(ModelState);
            }
            if (parentTask.Parent_ID > 0)
            {
                bool status = parentTaskBO.Update(parentTask);
                if (status)
                {
                    return Ok(parentTask.Parent_ID);
                } 
            }
            else
            parentTaskBO.Create(parentTask);

            return Ok(parentTask.Parent_ID);
        }

        // DELETE: api/Parent/5
        [ResponseType(typeof(ParentTask))]
        public IHttpActionResult DeleteParentTask(int id)
        {
         bool status=parentTaskBO.Delete(id);
            if (status)
                return Ok(id);
            else
                return BadRequest();
        }
         }
}
