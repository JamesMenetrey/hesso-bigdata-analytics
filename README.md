# Big Data Analytics Project
A big data analysis project for the master's degree in engineering at the University of Applied Sciences and Arts Western Switzerland.

## Authors
- Damien Rochat
- Jämes Ménétrey
- Romain Claret

## Reporting

The report can be downloaded at [this address](https://zenlulz.github.io/hesso-bigdata-analytics/mse-bda-groupe-d-claret-menetrey-rochat-report.pdf).

<p align="center">
  <a href="https://zenlulz.github.io/hesso-bigdata-analytics/report/taxi-report.pdf">
  <img width="300" height="424" src="https://zenlulz.github.io/hesso-bigdata-analytics/report/images/taxi-report-preview.png">
  </a>
</p>

## Presentation

The presentation can be downloaded at [this address](https://zenlulz.github.io/hesso-bigdata-analytics/mse-bda-groupe-d-claret-menetrey-rochat-presentation.pdf).


## Web application

The Web application to visualize the taxi agencies is available on [this page](https://zenlulz.github.io/hesso-bigdata-analytics/). The figure underneath illustrates the Web application.

[![The Web application](https://zenlulz.github.io/hesso-bigdata-analytics/report/images/web-app.png)](https://zenlulz.github.io/hesso-bigdata-analytics/report//images/web-app.png)


## Dataset [New York City Taxi Dataset](http://www.andresmh.com/nyctaxitrips/)
List of trips. For each trip: Taxi identification Driver identification Start time and end time of trip GPS coordinates of pick up and drop off * Fare
- The dataset is composed of 2 sub-datasets
  - the trips related information (trip_data.7z), sized 1.72GB
  - the fares related to each trip (trip_fare.7z), sized 4.1GB
  - each sub-dataset are each split into 13 CVS 

### dataset head: trip_data
| medallion                        | hack_license                     | vendor_id | rate_code | store_and_fwd_flag | pickup_datetime     | dropoff_datetime    | passenger_count | trip_time_in_secs | trip_distance | pickup_longitude | pickup_latitude | dropoff_longitude | dropoff_latitude | 
|----------------------------------|----------------------------------|-----------|-----------|--------------------|---------------------|---------------------|-----------------|-------------------|---------------|------------------|-----------------|-------------------|------------------| 
| 89D227B655E5C82AECF13C3F540D4CF4 | BA96DE419E711691B9445D6A6307C170 | CMT       | 1         | N                  | 2013-01-01 15:11:48 | 2013-01-01 15:18:10 | 4               | 382               | 1.00          | -73.978165       | 40.757977       | -73.989838        | 40.751171        | 
| 0BD7C8F5BA12B88E0B67BED28BEA73D8 | 9FD8F69F0804BDB5549F40E9DA1BE472 | CMT       | 1         | N                  | 2013-01-06 00:18:35 | 2013-01-06 00:22:54 | 1               | 259               | 1.50          | -74.006683       | 40.731781       | -73.994499        | 40.75066         | 
| 0BD7C8F5BA12B88E0B67BED28BEA73D8 | 9FD8F69F0804BDB5549F40E9DA1BE472 | CMT       | 1         | N                  | 2013-01-05 18:49:41 | 2013-01-05 18:54:23 | 1               | 282               | 1.10          | -74.004707       | 40.73777        | -74.009834        | 40.726002        | 
| DFD2202EE08F7A8DC9A57B02ACB81FE2 | 51EE87E3205C985EF8431D850C786310 | CMT       | 1         | N                  | 2013-01-07 23:54:15 | 2013-01-07 23:58:20 | 2               | 244               | .70           | -73.974602       | 40.759945       | -73.984734        | 40.759388        | 
| DFD2202EE08F7A8DC9A57B02ACB81FE2 | 51EE87E3205C985EF8431D850C786310 | CMT       | 1         | N                  | 2013-01-07 23:25:03 | 2013-01-07 23:34:24 | 1               | 560               | 2.10          | -73.97625        | 40.748528       | -74.002586        | 40.747868        | 
| 20D9ECB2CA0767CF7A01564DF2844A3E | 598CCE5B9C1918568DEE71F43CF26CD2 | CMT       | 1         | N                  | 2013-01-07 15:27:48 | 2013-01-07 15:38:37 | 1               | 648               | 1.70          | -73.966743       | 40.764252       | -73.983322        | 40.743763        | 
| 496644932DF3932605C22C7926FF0FE0 | 513189AD756FF14FE670D10B92FAF04C | CMT       | 1         | N                  | 2013-01-08 11:01:15 | 2013-01-08 11:08:14 | 1               | 418               | .80           | -73.995804       | 40.743977       | -74.007416        | 40.744343        | 
| 0B57B9633A2FECD3D3B1944AFC7471CF | CCD4367B417ED6634D986F573A552A62 | CMT       | 1         | N                  | 2013-01-07 12:39:18 | 2013-01-07 13:10:56 | 3               | 1898              | 10.70         | -73.989937       | 40.756775       | -73.86525         | 40.77063         | 
| 2C0E91FF20A856C891483ED63589F982 | 1DA2F6543A62B8ED934771661A9D2FA0 | CMT       | 1         | N                  | 2013-01-07 18:15:47 | 2013-01-07 18:20:47 | 1               | 299               | .80           | -73.980072       | 40.743137       | -73.982712        | 40.735336        | 


### dataset head: trip_fare
| medallion                        |  hack_license                    |  vendor_id |  pickup_datetime    |  payment_type |  fare_amount |  surcharge |  mta_tax |  tip_amount |  tolls_amount |  total_amount | 
|----------------------------------|----------------------------------|------------|---------------------|---------------|--------------|------------|----------|-------------|---------------|---------------| 
| 89D227B655E5C82AECF13C3F540D4CF4 | BA96DE419E711691B9445D6A6307C170 | CMT        | 2013-01-01 15:11:48 | CSH           | 6.5          | 0          | 0.5      | 0           | 0             | 7             | 
| 0BD7C8F5BA12B88E0B67BED28BEA73D8 | 9FD8F69F0804BDB5549F40E9DA1BE472 | CMT        | 2013-01-06 00:18:35 | CSH           | 6            | 0.5        | 0.5      | 0           | 0             | 7             | 
| 0BD7C8F5BA12B88E0B67BED28BEA73D8 | 9FD8F69F0804BDB5549F40E9DA1BE472 | CMT        | 2013-01-05 18:49:41 | CSH           | 5.5          | 1          | 0.5      | 0           | 0             | 7             | 
| DFD2202EE08F7A8DC9A57B02ACB81FE2 | 51EE87E3205C985EF8431D850C786310 | CMT        | 2013-01-07 23:54:15 | CSH           | 5            | 0.5        | 0.5      | 0           | 0             | 6             | 
| DFD2202EE08F7A8DC9A57B02ACB81FE2 | 51EE87E3205C985EF8431D850C786310 | CMT        | 2013-01-07 23:25:03 | CSH           | 9.5          | 0.5        | 0.5      | 0           | 0             | 10.5          | 
| 20D9ECB2CA0767CF7A01564DF2844A3E | 598CCE5B9C1918568DEE71F43CF26CD2 | CMT        | 2013-01-07 15:27:48 | CSH           | 9.5          | 0          | 0.5      | 0           | 0             | 10            | 
| 496644932DF3932605C22C7926FF0FE0 | 513189AD756FF14FE670D10B92FAF04C | CMT        | 2013-01-08 11:01:15 | CSH           | 6            | 0          | 0.5      | 0           | 0             | 6.5           | 
| 0B57B9633A2FECD3D3B1944AFC7471CF | CCD4367B417ED6634D986F573A552A62 | CMT        | 2013-01-07 12:39:18 | CSH           | 34           | 0          | 0.5      | 0           | 4.8           | 39.3          | 
| 2C0E91FF20A856C891483ED63589F982 | 1DA2F6543A62B8ED934771661A9D2FA0 | CMT        | 2013-01-07 18:15:47 | CSH           | 5.5          | 1          | 0.5      | 0           | 0             | 7             | 


## Subject
Our goal is to identify the most used areas from new york city, from a taxi agency point of view, to open new agency locations to increase profit and customer satisfaction.

## Analytical questions
- Where are the best locations for taxi subagencies, to optimize the costs and travel time for taxi cars?
- Find the best locations for customers
- Find the most profitable spots 

