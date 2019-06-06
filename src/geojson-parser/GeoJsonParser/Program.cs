using System;
using System.Collections.Generic;
using System.IO;
using GeoJsonParser.Models;
using Newtonsoft.Json;

namespace GeoJsonParser
{
    /// <summary>
    /// Syntax: dotnet run file.json [number-of-samples]
    /// </summary>
    internal class Program
    {
        private static void Main(string[] args)
        {
            if (args.Length < 1)
            {
                Console.WriteLine("geojson parser: invalid parameter. Syntax: dotnet run file.json [number-of-samples]");
                return;
            }

            // Parse the panda object
            var jsonInput = File.ReadAllText(args[0]);
            var modelInput = JsonConvert.DeserializeObject<double[][]>(jsonInput);

            // Calculate the number of elements to skip to meet the sample requirement
            var skip = args.Length > 1 ? modelInput.Length / int.Parse(args[1]) : 1;

            // Create the geo json
            var modelOutput = new GeoJsonModel {Type = "FeatureCollection", Features = new List<FeatureModel>(modelInput.Length)};

            for (var i = 0; i < modelInput.Length; i++)
            {
                // Skip to obtain the number of samples if specified
                if (i % skip != 0) continue;

                modelOutput.Features.Add(new FeatureModel
                {
                    Type = "Feature",
                    Geometry = new GeometryModel
                    {
                        Type = "Point",
                        Coordinates = new[]
                            {modelInput[i][1], modelInput[i][0]}
                    }
                });
            }

            // Create the json and output the result in stdout
            var jsonOutput = JsonConvert.SerializeObject(modelOutput);
            Console.Write(jsonOutput);
        }
    }
}