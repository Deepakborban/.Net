using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class IncDemo
	{
		static void Main()
		{
			int y = 5;
			int x = 2;
			//y = y++ + ++x;

			int res = x + y * 8 / 2 - 4;

			//Console.WriteLine("X = " + x);
			//Console.WriteLine("Y = " + y);

			Console.WriteLine("Res is  " + res);

		}
	}
}
