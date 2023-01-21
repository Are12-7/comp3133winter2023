// Carlos Arellano - 101339585

const csv = require('csv-parser');
const fs = require('fs');

//canada.txt - usa.txt
try {
    fs.unlinkSync('canada.txt');
    fs.unlinkSync('usa.txt');
  } catch (err) {
    // file does not exist
  }
  

// open input_countries.csv
fs.createReadStream('input_countries.csv')
  .pipe(csv())
    .on('data', (data) => {
      //filter Canada
      if (data.country === 'Canada') {
          fs.appendFileSync('canada.txt', `${data.country}, ${data.year}, ${data.population}\n`);
      }
      //filte USA
      if (data.country === 'United States') {
        fs.appendFileSync('usa.txt', `${data.country}, ${data.year}, ${data.population}\n`);
    }
      
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });