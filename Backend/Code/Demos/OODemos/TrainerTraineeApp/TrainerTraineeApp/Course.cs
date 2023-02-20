using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrainerTraineeApp
{
	class Course
	{
		public string CourseName { get; set; }
		public Technology Technology { get; set; }
		private List<Module> modules = new List<Module>();
		private List<Training> trainings = new List<Training>();

		public void AddModule(Module module)
		{
			this.modules.Add(module);
		}

		public List<Module> GetModules()
		{
			return this.modules;
		}

		public void AddTraining(Training training)
		{
			this.trainings.Add(training);
		}

		public List<Training> GetTrainings()
		{
			return this.trainings;
		}
	}
}
