using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
	class LoopsDemo
	{
		static void Main()
		{	
			//nos = 1264 = One Two Six Four

			int cnt = 1;
			Console.WriteLine("Enter characters:");
			do
			{
				char c = (char)Console.Read();
				if(c == '0')
				{
					break;
				}
				switch (c)
				{
					case 'a':
					case 'e':
					case 'i':
					case 'o':
					case 'u': Console.WriteLine("Its ovel"); break;
					default:
						Console.WriteLine("Invalid character");
						break;
				}

				Console.WriteLine(++cnt);
			} while (1==2);

			//for( ; cnt <= n; )
			//{
			//	Console.WriteLine(cnt++);
			//}
		}
	}
}
