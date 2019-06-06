using System;
using System.IO;

namespace DataWalker
{
    /// <summary>
    /// Syntax: dotnet DataWalker.dll file.csv
    /// </summary>
    class Program
    {
        static void Main(string[] args)
        {

            if (args.Length < 1)
            {
                Console.WriteLine("Invalid argument. Syntax: dotnet DataWalker.dll <file.csv>");
                return;
            }

            using (var input = File.OpenRead(args[0]))
            using (var reader = new StreamReader(input))
            using (var output = File.OpenWrite(args[0] + "_out"))
            using (var writer = new StreamWriter(output))
            {
                while (!reader.EndOfStream)
                {
                    var line = reader.ReadLine();

                    if (line != null)
                    {
                        var splitLine = line.Split(',');

                        if (double.TryParse(splitLine[1], out double price))
                        {
                            var priceCeil = Math.Ceiling(price);

                            for (int i = 0; i < priceCeil; i++)
                            {
                                writer.WriteLine($"{splitLine[1]},{splitLine[2]},{splitLine[3]}");
                            }
                        }
                    }
                }
            }
        }
    }
}
