using Newtonsoft.Json;

namespace GeoJsonParser.Models
{
    public class FeatureModel
    {
        [JsonProperty(PropertyName = "type")] public string Type { get; set; }

        [JsonProperty(PropertyName = "geometry")]
        public GeometryModel Geometry { get; set; }
    }
}