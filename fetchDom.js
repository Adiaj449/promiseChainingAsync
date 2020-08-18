fetch("https://restcountries.eu/rest/v2/all")
.then(function(data){
    return data.json();
})
.then(function(realData){
    for(let i=0;i<realData.length;i++)
    {
        document.getElementById('dom').innerText += " "+realData[i]["name"];
    }
    console.log(realData);
})
.catch(function(err){
    console.log("Error",err)
})