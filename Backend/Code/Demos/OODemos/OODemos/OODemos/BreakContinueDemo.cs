using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class BreakContinueDemo
	{
		static void Main()
		{
			for (int i = 1; i <= 10; i++)
			{
				for(int j = 1; j<= 10; j++)
				{
					if( i == 5)
					{
						break;
					}
					Console.WriteLine(i);
				}
				Console.WriteLine("-----------" + i + "-------------");
			}
		}
	}
}
