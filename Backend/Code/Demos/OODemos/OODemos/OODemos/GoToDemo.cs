using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class GoToDemo
	{
		static void Main()
		{
			int x = 5; 
			if(x == 5)
			{
				goto LessThan;
			}
			else
			{
				goto GreaterThan;
			}


		LessThan: Console.WriteLine("This is 5");

		GreaterThan: Console.WriteLine("This is not equal to 5");
		}
	}
}
