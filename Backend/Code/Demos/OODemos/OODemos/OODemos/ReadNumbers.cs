using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class ReadNumbers
	{
		static void Main()
		{
			int no1, no2;
			Console.WriteLine("Enter no1:");
			no1 = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter no2:");
			no2 = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Sum of numbers is {0}", (no1+no2));
			//10 + 20 = 30
			//int res = no1 + no2;
			Console.WriteLine("{0} + {1} = {2}", no1, no2, (no1+no2));
		}
	}
}
