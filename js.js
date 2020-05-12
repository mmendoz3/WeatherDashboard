//write function to get information form local storage to render the history buttons
//local it inmediately
var cityButtons = localStorage.getItem('cityList');
console.log(cityButtons);
//use a for loop and jquery to create buttons with the sting chicago 
for (var i = 0; i < cityButtons.length; i++) {
    console.log(cityButtons[i]);
}

function weather(cityResult) {
var APIKey = "9d23b5dbc431bec7d6045c725d4bdb49";
var queryURL = `http://api.openweathermap.org/data/2.5/weather?q=${cityResult}&appid=` + APIKey;

$.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
    //rendering information 
    $('#city').html('city name:' + response.name);
}); 
}

$('#search').on('click', function(getData){ 
    getData.preventDefault();
    var cityName = $('#input').val();
    console.log(cityName);
    //saving the information into local storage
    //save array of buttons to local storage
    var cityArr = localStorage.getItem('cityList');
    console.log(typeof cityArr);
    if(cityArr) {
        var cityResult = JSON.parse(cityArr);
        console.log(cityResult);
        cityResult.push(cityName);
        console.log(cityResult);
        var finalSave = JSON.stringify(cityResult);
        console.log(finalSave);
        localStorage.setItem("cityList", finalSave);
        weather(cityName);
    } else {
        cityArr = []
        cityArr.push(cityName);
        console.log(cityArr);
        var finalSave = JSON.stringify(cityArr);
        console.log(finalSave);
        localStorage.setItem("cityList", finalSave);
        weather(cityName);
    }
})

//save the data we receive from the API into local storage and show it into the 


