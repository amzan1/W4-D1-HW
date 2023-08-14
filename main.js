let button = document.querySelector('.btn')
let inputValue = document.querySelector('.inputValue')
let name1 = document.querySelector('.name')
let desc = document.querySelector('.desc')
let temp_Fahrenheit = document.querySelector('.temp_Fahrenheit')
let temp_Celsius = document.querySelector('.temp_Celsius')
let icon = document.querySelector('.icon')
let humidity = document.querySelector('.humidity')

button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=56f59d26f82af4ee81cbc6068dc9100d')
    .then(response => response.json())
    
    .then(data => 
        {
        let nameValue = data['name']
        let tempValue = data['main']['temp']
        let descValue = data['weather'][0]['description']
        let iconValue = data['weather'][0]['icon']
        let ftemp = (( tempValue - 273.15) * 1.8) + 32
        let ctemp = (ftemp - 32) / 1.8
        let humidityValue = data['main']['humidity']
        
        name1.innerText=nameValue
        desc.innerText= descValue
        temp_Fahrenheit.innerText= Math.round(ftemp)+ "°F";
        temp_Celsius.innerText= Math.round(ctemp)+ "°C";
        // icon.innerText = iconValue
        icon.setAttribute("src", "https://openweathermap.org/img/wn/"+iconValue+"@2x.png")
        humidity.innerText= "Humidity is "+humidityValue+"%";

    }
    )
    
    
    .catch(err => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');})
})

fetch('https://api.openweathermap.org/data/2.5/weather?q=london&appid=56f59d26f82af4ee81cbc6068dc9100d')
    .then(response => response.json())
    
    .then(data => console.log(data))
    
    
    .catch(err => {
                console.log('====================================');
                console.log(err);
                console.log('====================================');})