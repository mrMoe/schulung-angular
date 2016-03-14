using System;
using System.Collections.Generic;

namespace CampusAssessment.Models
{
    public class Talk
    {
        public String id { get; set; }
        public String title { get; set; }
        public String caption { get; set; }
        public String text { get; set; }
        public Speaker speaker { get; set; }
        public List<Review> reviews { get; set; } = new List<Review>();
    }
}
