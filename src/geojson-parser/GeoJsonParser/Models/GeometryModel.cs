using Newtonsoft.Json;

namespace GeoJsonParser.Models
{
    public class GeometryModel
    {
        [JsonProperty(PropertyName = "type")] public string Type { get; set; }

        [JsonProperty(PropertyName = "coordinates")]
        public double[] Coordinates { get; set; }
    }
}