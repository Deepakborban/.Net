using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrainerTraineeApp
{
	class Program
	{
		static void Main(string[] args)
		{
			//1. create topic
			Topic topic1 = new Topic();
			topic1.TopicName = "p tag";
			Topic topic2 = new Topic() { TopicName = "a tag" };
			Topic topic3 = new Topic() { TopicName = "table tag" };
			Topic topic4 = new Topic() { TopicName = "JS Intro" };
			Topic topic5 = new Topic() { TopicName = "JS Loops" };
			Topic topic6 = new Topic() { TopicName = "Fonts" };
			Topic topic7 = new Topic() { TopicName = "Borders" };

			//2. create unit
			Unit unit1 = new Unit() { UnitName = "HTML" };
			Unit unit2 = new Unit() { UnitName = "JS" };
			Unit unit3 = new Unit() { UnitName = "CSS" };

			//3. add topic to unit
			unit1.AddTopic(topic1);
			unit1.AddTopic(topic2);
			unit1.AddTopic(topic3);
			unit2.AddTopic(topic4);
			unit2.AddTopic(topic5);
			unit3.AddTopic(topic6);
			unit3.AddTopic(topic7);

			//4. create module
			Module module1 = new Module() { ModuleName = "Web Fun" };

			//5. add unit to module
			module1.AddUnit(unit1);
			module1.AddUnit(unit2);
			module1.AddUnit(unit3);

			//6. create course
			Course course = new Course() { CourseName = ".NET" };

			//7. add moudle to course
			course.AddModule(module1);

			//8. create technology
			Technology technology = new Technology() { TechnologyName = ".NET Technology" };

			//9. add technology to course
			course.Technology = technology;

			//10. add course to technology
			technology.AddCourse(course);

			//11. create training
			Training training = new Training() { TrainingName = "MP-.NET 202" };

			//12. add course to training
			training.Course = course;

			//13. add training to course
			course.AddTraining(training);

			//14. create trainee
			Trainee trainee1 = new Trainee() { TraineeName = "Ravi" };
			Trainee trainee2 = new Trainee() { TraineeName = "Shiva" };
			Trainee trainee3 = new Trainee() { TraineeName = "Shankar" };
			Trainee trainee4 = new Trainee() { TraineeName = "Sundar" };
			Trainee trainee5 = new Trainee() { TraineeName = "Avvi" };

			//15. add training to trainee
			trainee1.Training = training;
			trainee2.Training = training;
			trainee3.Training = training;
			trainee4.Training = training;
			trainee5.Training = training;

			//16. add trainee to training
			training.AddTrainee(trainee1);
			training.AddTrainee(trainee2);
			training.AddTrainee(trainee3);
			training.AddTrainee(trainee4);
			training.AddTrainee(trainee5);

			//17. create trainer
			Trainer trainer = new Trainer() { TrainerName = "Shashi" };

			//18. add training to trainer
			trainer.Training = training;

			//19. add trainer to training
			training.Trainer = trainer;

			//20. add trainee to trainer
			trainer.AddTrainee(trainee1);
			trainer.AddTrainee(trainee2);
			trainer.AddTrainee(trainee3);
			trainer.AddTrainee(trainee4);
			trainer.AddTrainee(trainee5);

			//21. add trainer to trainee
			trainee1.Trainer = trainer;
			trainee2.Trainer = trainer;
			trainee3.Trainer = trainer;
			trainee4.Trainer = trainer;
			trainee5.Trainer = trainer;

			//22. dispaly training details
			DisplayTraining(training);
		}

		private static void DisplayTraining(Training training)
		{
			Console.WriteLine("\t\tTraining Details");
			DrawLine();
			Console.WriteLine("Course: " + training.Course.CourseName);
			Console.WriteLine("Trainer Name : " + training.Trainer.TrainerName);
			Console.WriteLine("Trainees Info");
			DrawLine();
			foreach (var trainee in training.GetTrainees())
			{
				Console.WriteLine(trainee.TraineeName);
			}
			DrawLine();
			Console.WriteLine("Course Name : {0}\tTechnology : {1}", 
								training.Course.CourseName, training.Course.Technology.TechnologyName);
			DrawLine();
			foreach (var module in training.Course.GetModules())
			{
				Console.WriteLine(module.ModuleName);
				DrawLine();
				foreach (var unit in module.GetUnits())
				{
					Console.WriteLine("\t" + unit.UnitName);
					DrawLine();
					foreach (var topic in unit.GetTopics())
					{
						Console.WriteLine("\t\t" + topic.TopicName);
					}
					DrawLine();
				}
				DrawLine();
			} 
		}

		private static void DrawLine()
		{
			for (int i = 0; i < 35; i++)
			{
				Console.Write("-");
			}
			Console.WriteLine();
		}
	}
}
