using System.Collections.Generic;
using Newtonsoft.Json;

namespace GeoJsonParser.Models
{
    public class GeoJsonModel
    {
        [JsonProperty(PropertyName = "type")] public string Type { get; set; }

        [JsonProperty(PropertyName = "features")]
        public List<FeatureModel> Features { get; set; }
    }
}