  using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OODemos
{
    class Employee
    {
        //fields
        int empId;
        string employeeName;
       
        public int GetEmpId()
        {
            return empId;
        }
        public void SetEmpId(int empId)
        {
            empId = empId;
        }
        public string GetEmployeeName()
        {
            return employeeName;
        }
        public void SetEmployeeName(string empName)
        {
            employeeName = empName;
        }
        //What are we bringing in set and get method 
        //So they are like my Accessors and Mutators 
        //i am accessing it and i'm mutating it i am storing the data inside it 
    }
}
