using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class ArrayDemo1
	{
		static void Main()
		{
			//int[] arr = new int[5];
			int[] arr = { 1, 5, 2, 9, 6, 3, 8, 4, 10, 7 };
			/*
			for (int i = 0; i < arr.Length; i++)
			{
				Console.WriteLine(arr[i]);
			}
			*/
			foreach (int i in arr)
			{
				Console.WriteLine(i);
			}
			Console.WriteLine("Average : " + arr.Average());
			Console.WriteLine("Sum : " + arr.Sum());
			Console.WriteLine("Sorted");
			Array.Sort(arr);
			foreach (int i in arr)
			{
				Console.WriteLine(i);
			}
		}
	}
}
