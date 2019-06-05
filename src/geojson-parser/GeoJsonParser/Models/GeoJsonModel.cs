using System.Collections.Generic;
using Newtonsoft.Json;

namespace GeoJsonParser.Models
{
    public class GeoJsonModel
    {
        public GeoJsonModel()
        {
            Features = new List<FeatureModel>();
        }

        [JsonProperty(PropertyName = "type")] public string Type { get; set; }

        [JsonProperty(PropertyName = "features")]
        public List<FeatureModel> Features { get; set; }
    }
}