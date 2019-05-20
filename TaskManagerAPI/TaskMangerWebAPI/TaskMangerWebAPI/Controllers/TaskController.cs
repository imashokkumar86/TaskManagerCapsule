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
    public class TaskController : ApiController
    {
        private TaskDetailBO taskDetailBO;
        public TaskController()
        {
            taskDetailBO = new TaskDetailBO();
        }
        // GET: api/Task
        public List<TaskDetail> GetParentTasks()
        {
            return taskDetailBO.GetAll();
        }

        // GET: api/Task/5
        [ResponseType(typeof(TaskDetail))]
        public IHttpActionResult GetTask(int id)
        {
            TaskDetail taskDetail = taskDetailBO.Retrieve(id);
            if (taskDetail == null)
            {
                return NotFound();
            }

            return Ok(taskDetail);
        }

        // PUT: api/Task/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTask(int id, TaskDetail taskDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != taskDetail.Task_ID)
            {
                return BadRequest();
            }

            bool status = taskDetailBO.Update(taskDetail);

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Task
        [ResponseType(typeof(ParentTask))]
        public IHttpActionResult PostParentTask(TaskDetail taskDetail)
        {
            if (!ModelState.IsValid && taskDetail.Task_ID != 0)
            {
                return BadRequest(ModelState);
            }

            if (taskDetail.Task_ID > 0)
            {

                bool status = taskDetailBO.Update(taskDetail);
                if (status)
                {
                    return Ok(taskDetail.Task_ID);
                }
                else
                    return BadRequest(ModelState);
            }
            else
            taskDetailBO.Create(taskDetail);

            return Ok(taskDetail.Task_ID);
        }

        // DELETE: api/Task/5
        [ResponseType(typeof(ParentTask))]
        public IHttpActionResult DeleteParentTask(int id)
        {
            bool status = taskDetailBO.Delete(id);
            if (status)
                return Ok();
            else
                return BadRequest();
        }
    }
}
