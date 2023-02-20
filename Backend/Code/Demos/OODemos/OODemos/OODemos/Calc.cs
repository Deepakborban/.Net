using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class Calc
	{
		static void Main()
		{
			//IPO - UI
			int no1, no2;
			string oper;
			Console.WriteLine("Enter number 1:");
			no1 = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter number 2:");
			no2 = Convert.ToInt32(Console.ReadLine());
			Console.WriteLine("Enter the operation(+,-,*,/):");
			oper = Console.ReadLine();
			//SRP - Single Res Pri : SOLID
			int result = Sum(no1, no2);
			switch (oper)
			{
				case "+": result = Sum(no1, no2); break;
				case "-": result = Diff(no1, no2); break;
				case "*": result = Multi(no1, no2); break;
				case "/": result = Div(no1, no2); break;
				default:
					Console.WriteLine("Invalid operator");
					break;
			}
			Dispaly(no1, no2, result, oper);
		}

		private static void Dispaly(int no1, int no2, int result, string oper)
		{
			Console.WriteLine("{0} {1} {2} = {3}",no1, oper, no2, result);
		}

		private static int Div(int no1, int no2)
		{
			return no1 / no2;
		}

		private static int Multi(int no1, int no2)
		{
			return no1 * no2;
		}

		private static int Diff(int no1, int no2)
		{
			return no1 - no2;
		}

		private static int Sum(int no1, int no2)
		{
			return no1 + no2;
		}
	}
}
