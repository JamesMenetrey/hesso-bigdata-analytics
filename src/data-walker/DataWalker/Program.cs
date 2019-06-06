using System;
using System.IO;
using System.Threading.Tasks;

namespace DataWalker
{
    /// <summary>
    /// Syntax: dotnet DataWalker.dll files.csv..
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {

            if (args.Length < 1)
            {
                Console.WriteLine("Invalid argument. Syntax: dotnet DataWalker.dll files.csv..");
                return;
            }

            Parallel.ForEach(args, path =>
            {
                using (var input = File.OpenRead(path))
                using (var reader = new StreamReader(input))
                using (var output = File.OpenWrite(path + "_out"))
                using (var writer = new StreamWriter(output))
                {
                    while (!reader.EndOfStream)
                    {
                        var line = reader.ReadLine();

                        if (line != null)
                        {
                            var splitLine = line.Split(',');

                            if (double.TryParse(splitLine[1], out double price) && price <= 20)
                            {
                                // Sampling of 5 parts (20/4)
                                var limitIteration = Math.Ceiling(price / 4);

                                for (int i = 0; i < limitIteration; i++)
                                {
                                    writer.WriteLine($"{splitLine[1]},{splitLine[2]},{splitLine[3]}");
                                }
                            }
                        }
                    }
                }
            });

        }
    }
}
