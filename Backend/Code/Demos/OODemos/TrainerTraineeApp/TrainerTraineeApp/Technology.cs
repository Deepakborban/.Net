using System.Collections.Generic;

namespace TrainerTraineeApp
{
	class Technology
	{
		public string TechnologyName { get; set; }
		private List<Course> courses = new List<Course>();

		public void AddCourse(Course course)
		{
			this.courses.Add(course);
		}

		public List<Course> GetCourses()
		{
			return this.courses;
		}
	}
}