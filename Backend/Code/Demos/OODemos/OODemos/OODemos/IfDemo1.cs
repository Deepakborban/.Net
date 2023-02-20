using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class IfDemo1
	{
		static void Main()
		{
			int no1 = 100, no2 = 20;
			FindBiggest(no1, no2);
			Console.WriteLine("This is next statement");
			Console.WriteLine("This is last line");
		}

		private static void FindBiggest(int no1, int no2)
		{
			int big = (no1 > no2 ? no1 : no2);
			//int big = no2;
			//if (no1 > no2)
			//{
			//	big = no1;
			//}
			Console.WriteLine("{0} is bigger", big);
		}
	}
}
