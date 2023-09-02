// Load data from the JSON file
d3.json(jsonURL).then(function(data) {
    // Extract data from the JSON
    const samples = data.samples;
    const wfreq = samples.map(sample => sample.wfreq);
})