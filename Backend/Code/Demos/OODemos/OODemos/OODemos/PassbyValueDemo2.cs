using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	struct Student
	{
		public int id;
		public string name;
	}


	class PassbyValueDemo2
	{
		static void Main()
		{
			Student student1 = new Student();
			student1.id = 1001;
			student1.name = "Shashi";
			DispalyStudent(student1);
			Student student2 = student1;
			student2.id = 1002;
			DispalyStudent(student2);
			DispalyStudent(student1);
		}

		private static void DispalyStudent(Student student)
		{
			Console.WriteLine("ID = " + student.id);
			Console.WriteLine("Name = " + student.name);
		}
	}
}
