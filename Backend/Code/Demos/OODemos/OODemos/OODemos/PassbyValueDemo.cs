using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class PassbyValueDemo
	{
		static void Main()
		{
			int no1 = 10, no2 = 20;
			Console.WriteLine("Before Swapping");
			Console.WriteLine("No1 = " + no1 + "\tNo2 = " + no2);
			Swap(no1, no2);
			Console.WriteLine("After Swapping");
			Console.WriteLine("No1 = " + no1 + "\tNo2 = " + no2);
		}

		private static void Swap(int no1, int no2)
		{
			no1 = no1 + no2;
			no2 = no1 - no2;
			no1 = no1 - no2;
			Console.WriteLine("After Swapping");
			Console.WriteLine("No1 = " + no1 + "\tNo2 = " + no2);
		}
	}
}
