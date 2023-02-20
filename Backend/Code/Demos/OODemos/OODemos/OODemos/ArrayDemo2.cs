using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class ArrayDemo2
	{
		static void Main()
		{
			//2 -dim array
			int[,] matrix = new int[3, 3]
			{
				{ 1, 2, 3 },
				{ 4, 5, 6 },
				{ 7, 8, 9 }
			};
			Console.WriteLine("Matrix value is");
			for (int i = 0; i < 3; i++)
			{
				for (int j = 0; j < 3; j++)
				{
					Console.Write(matrix[i,j] + " ");
				}
				Console.WriteLine();
			}
		}
	}
}
