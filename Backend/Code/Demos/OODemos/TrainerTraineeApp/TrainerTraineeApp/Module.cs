using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrainerTraineeApp
{
	class Module
	{
		public string ModuleName { get; set; }
		private List<Unit> units = new List<Unit>();

		public void AddUnit(Unit unit)
		{
			this.units.Add(unit);
		}

		public List<Unit> GetUnits()
		{
			return this.units;
		}
	}
}
