# Node Cron Speed Checker

This is a NodeJS project that runs every hour on the hour,
speaks to speedcheck.net via [speedtest-net](https://www.npmjs.com/package/speedtest-net) 
and uses IFTTT's Maker chanel to insert the results into a Google Docs spreadsheet.

## Packages

- [speedtest-net](https://www.npmjs.com/package/speedtest-net)
- [node-cron](https://www.npmjs.com/package/node-cron)
- [isomorphic-fetch](https://www.npmjs.com/package/isomorphic-fetch)

## Getting started

First of all go to [IFTTT Maker](https://ifttt.com/maker) and create a trigger, and 
set it up to add row to a google docs spreadsheet.

Take the key for the maker trigger and set it to an evironment variable and run the project.

`IFTTT_KEY={your_key} node index.js`

## Keeping this app up over time 

I use [pm2](https://www.npmjs.com/package/pm2) to run this project on my raspberry pi so if it ever goes down, 
pm2 can just restart the app and it'll continue to run speedchecks every hour