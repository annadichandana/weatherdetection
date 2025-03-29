const api_key="bcf8ce24a3496c1776944821b4de68aa";
let search=document.getElementById("search");
let weatherform=document.getElementById("weather");
async function fetchdata() {
    let city=document.getElementById("i1").value;
    if(!city){
        window.alert("enter a valid city");
        return;
    }
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`);
        if(!response.ok){
            document.getElementById("heloo").innerHTML = `<h2 style="color:red;">City not found</h2>`;
            return;
            
        }
        let mydate=new Date();
        let date=mydate.toDateString();
        let time=mydate.toLocaleTimeString();
        let user = await response.json();
        console.log(user);
        let emoji;
        if(user.weather[0].main=="ThunderStorm"){
            emoji="⛈️⚡";
        }
        else if(user.weather[0].main=="Drizzle"){
            emoji="🌦️💦"; 
        }
        else if(user.weather[0].main=="Rain"){
            emoji="🌧️"; 
        }
        else if(user.weather[0].main=="Snow"){
            emoji="☃️🌨️"; 
        }
        else if(user.weather[0].main=="Clear"){
            emoji="🌞"; 
        }
        else if(user.weather[0].description=="few clouds"){
            emoji="🌤️"; 
        }
        else if(user.weather[0].description=="scattered clouds"){
            emoji="🌥️"; 
        }
        else if(user.weather[0].description=="broken clouds"){
            emoji="☁️🌥️"; 
        }
        else if(user.weather[0].description=="overcast clouds"){
            emoji="☁️☁️"; 
        }
        else if(user.weather[0].main=="Haze"){
            emoji="🌫️"; 
        }
        else if(user.weather[0].main=="Mist"){
            emoji="🌁"; 
        }
        else if(user.weather[0].main=="Dust"){
            emoji="💨"; 
        }
        else if(user.weather[0].main=="Tornado"){
            emoji="🌪"; 
        }
        else if(user.weather[0].main=="Squall"){
            emoji="💨"; 
        }
        else if(user.weather[0].main=="Ash"){
            emoji="🌋"; 
        }
        else if(user.weather[0].main=="Sand"){
            emoji="🌪"; 
        }
        else {
            emoji="🌫️"; 
        }
        document.getElementById("heloo").innerHTML = `
            <h2>${user.name}, ${user.sys.country}</h2>
            <p>${date} ${time}<\p>
            <p id="emo">${emoji}<\p>
            <p class="p1">Temperature: ${user.main.temp}°C</p>
            <p>Weather: ${user.weather[0].description}</p>
        `;
    }
    catch(error){
        console.log(error.message);
    }
}
weatherform.addEventListener("submit",function(event){
    event.preventDefault();
    fetchdata();
});
let val=document.getElementById("i1");
val.oninput = function() {
    let input = document.getElementById("i1");
    let icon = document.getElementsByClassName("fas fa-search")[0]; 
    if (icon) {
        icon.style.display = input.value.trim() !== "" ? "none" : "block";
    }
};
