using Newtonsoft.Json;

namespace GeoJsonParser.Models
{
    public class FeatureModel
    {
        public FeatureModel()
        {
            Geometry = new GeometryModel();
        }

        [JsonProperty(PropertyName = "type")] public string Type { get; set; }

        [JsonProperty(PropertyName = "geometry")]
        public GeometryModel Geometry { get; set; }
    }
}