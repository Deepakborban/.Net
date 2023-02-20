using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class IfDemo3
	{
		static void Main()
		{
			string dow = "Sun";
			//sun = white
			//mon = yellow
			//tue = red
			//wed = orange
			//thur = pink
			//fri = black
			//sat = ur wish
			switch (dow)
			{
				case "Sun": Console.WriteLine("White"); break;
				case "Mon": Console.WriteLine("Yello"); break;
				case "Tue": Console.WriteLine("Red"); break;
				default:
					Console.WriteLine("Your Wish");
					break;
			}
		}
	}
}
