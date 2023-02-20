using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class IntToWord
	{
		static void Main()
		{
			string[] words = { "Zero", "One", "Two", "Three", "Four", "Five" };
			Console.WriteLine("Enter a number:");
			string nos = Console.ReadLine();
			char[] nosInChar = nos.ToCharArray();
			foreach (var no in nosInChar)
			{
				var n = (int)Char.GetNumericValue(no);
				Console.Write(words[n] + " " );
			}
			Console.WriteLine();
		}
	}
}
