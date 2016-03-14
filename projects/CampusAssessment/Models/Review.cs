using System;

namespace CampusAssessment.Models
{
    public class Review
    {
        public String name { get; set; }
        public String positives { get; set; }
        public String missing { get; set; }
        public int? rating { get; set; }
        public int? topic { get; set; }
        public int? experience { get; set; }

    }
}