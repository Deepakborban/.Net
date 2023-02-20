using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class Tables
	{
		static void Main()
		{
			for(var i=1; i<=5; i++)
			{
				for(var j=1; j<=10; j++)
				{
					Console.WriteLine("{0} x {1} = {2}", i, j, i*j);
				}
				Console.WriteLine("------------------");
			}
		}
	}
}
