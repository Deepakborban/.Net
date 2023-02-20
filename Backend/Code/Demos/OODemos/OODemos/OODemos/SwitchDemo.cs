using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class SwitchDemo
	{
		static void Main()
		{
			int no = 5;
			switch (no)
			{
				case 1: Console.WriteLine("Its 1"); break;
				case 1 + 1: Console.WriteLine("Its 2"); break;
				case 2 + 2: Console.WriteLine("Its 4"); break;
				case 1-3: Console.WriteLine("Its 4"); break;
				default:
					break;
			}
		}
	}
}
