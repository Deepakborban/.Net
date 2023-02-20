using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class CommandLineDemo
	{
		static void Main(string[] args)
		{
			if(args.Length > 0)
			{
				foreach (var item in args)
				{
					Console.WriteLine(item);
				}
			}
			else
			{
				Console.WriteLine("No args passed");
			}
		}
	}
}
