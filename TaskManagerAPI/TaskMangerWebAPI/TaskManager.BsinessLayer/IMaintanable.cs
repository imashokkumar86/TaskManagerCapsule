using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TaskManager.BusinessLayer
{
    public interface IMaintanable<T>
    {
        List<T> GetAll();
        void Create(T obj);
        T Retrieve(int key);
        bool Update(T obj);
        bool Delete(int key);
    }
}
