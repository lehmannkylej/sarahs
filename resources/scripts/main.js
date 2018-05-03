/*
SARAH'S CAKE SHOP
Main Javascript Code

Kyle Lehmann
lehmannkylej@gmail.com
Created: 4-28-2018

Filename: main.js
SUPPORTING FILES: N/A

Last Edited: 4-27-2018
*/

//CURRENT YEAR
function currentYear(){
  now = new Date
  theYear=now.getYear()
  if (theYear < 1900)
  theYear=theYear+1900
  document.write(theYear)
}
