using System.Collections.Generic;

namespace GeoJsonParser.Models
{
    public class PandaOutputModel
    {
        public Dictionary<string, double> Longitude { get; set; }
        public Dictionary<string, double> Latitude { get; set; }
    }
}