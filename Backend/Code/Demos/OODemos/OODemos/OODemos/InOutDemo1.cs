using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class InOutDemo1
	{
		static void Main()
		{
			int no1 = 10, no2;
			InOutInit(ref no1, out no2);

			Console.WriteLine("No1 = {0} No2 = {1}", no1, no2);
		}

		private static void InOutInit(ref int no1, out int no2)
		{
			no2 = 100;
			no1 = no1 + no2;
		}
	}
}
