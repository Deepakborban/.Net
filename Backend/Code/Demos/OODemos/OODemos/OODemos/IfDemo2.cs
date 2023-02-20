using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class IfDemo2
	{
		static void Main()
		{
			bool isTrue = true;
			if (isTrue)
			{
				Console.WriteLine("Hi");				
			}
			else
			{
				Console.WriteLine("Hello");
			}
			isTrue = !isTrue;
			Console.WriteLine("Value of isTrue is {0}", isTrue);
		}
	}
}
