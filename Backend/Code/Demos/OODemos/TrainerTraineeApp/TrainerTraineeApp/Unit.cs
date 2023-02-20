using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrainerTraineeApp
{
	class Unit
	{
		public string UnitName { get; set; }
		private List<Topic> topics = new List<Topic>();

		public void AddTopic(Topic topic)
		{
			this.topics.Add(topic);
		}

		public List<Topic> GetTopics()
		{
			return this.topics;
		}
	}
}
