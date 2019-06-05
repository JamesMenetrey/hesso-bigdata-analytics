using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using GeoJsonParser.Models;
using Newtonsoft.Json;

namespace GeoJsonParser
{
    /// <summary>
    /// Syntax: dotnet run file.json
    /// </summary>
    internal class Program
    {
        private static void Main(string[] args)
        {
            if (args.Length != 1)
            {
                Console.WriteLine("geojson parser: invalid parameter. Syntax: dotnet run file.json");
                return;
            }

            // Parse the panda object
            var jsonInput = File.ReadAllText(args[0]);
            var modelInput = JsonConvert.DeserializeObject<PandaOutputModel>(jsonInput);

            // Create the geo json
            var modelOutput = new GeoJsonModel {Type = "FeatureCollection", Features = new List<FeatureModel>()};

            for (var i = 0; i < modelInput.Latitude.Count; i++)
                modelOutput.Features.Add(new FeatureModel
                {
                    Type = "Feature",
                    Geometry = new GeometryModel
                    {
                        Type = "Point",
                        Coordinates = new[]
                            {modelInput.Longitude.ElementAt(i).Value, modelInput.Latitude.ElementAt(i).Value}
                    }
                });

            // Create the json and output the result in stdout
            var jsonOutput = JsonConvert.SerializeObject(modelOutput);
            Console.Write(jsonOutput);
        }
    }
}