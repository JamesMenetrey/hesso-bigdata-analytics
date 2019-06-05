# GeoJSON Parser
Transforms a json exported by the machine learning algorithm into a GeoJSON file, which can be loaded in the frontend component Mapbox.

# How to run

It requires the dotnet environment. It can be installed on macOS using the following command:

```
brew cask install dotnet
```

The parser can be run using:

```sh
dotnet compiled/GeoJsonParser.dll
```

The GeoJSON is given in stdout.
