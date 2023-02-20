using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class ConvertType
	{
		static void Main()
		{
			string no = "20";
			/*
			int a = 10; //1BHK
			float f = a; //2BHK
			double d = f; //3BHK
			*/
			double d = 10002342333242342.23234234234;
			float f = (float)d;
			int a = (int)f;
			//int res = a + int.Parse(no);
			int res = a + Convert.ToInt32(no);
			
			//Console.WriteLine("A = " + a + " F = " + f);
			Console.WriteLine("A = {0} F = {1} D = {2}", a, f, d);
		}
	}
}
