const apiKey ='9169b1e892d20113254a90bf793f65c8'
const apilink = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='


async function weather(city){
  const value = await fetch(apilink+ city +`&appid=${apiKey}`)

  if(value.status === 404){
    document.querySelector('.error p').style.display = 'block'
    document.querySelector('.detials').style.display = 'none'
  }else {
    let data = await value.json()
    let name = await data.name
    let cloud = await data.weather[0].main
    document.querySelector('h2').innerHTML = name;
    document.querySelector('h1').innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector('h3').innerHTML = data.wind.speed +'%'
    document.querySelector('h4').innerHTML = data.main.humidity+'Km/h'
    const img = document.querySelector('.details img')
  
    if(cloud === 'Clouds'){
      img.src = "images/clouds.png"
    }else if (cloud === 'Rain'){
      img.src = "images/rain.png"
    }else if(cloud === 'Clear'){
      img.src = "images/clear.png"
    }else if(cloud === 'Drizzle'){
      img.src = "images/drizzle.png"
    }else if(cloud === "Mist"){
      img.src = "images/mist.png"
    }
    document.querySelector('.details').style.display = 'block';
    document.querySelector('.error p').style.display ='none';
  }
}
function search(){
  const searchbar = document.querySelector('.search-bar input')
  weather(searchbar.value);
  document.querySelector('.search-bar input').value = ""
}

let demovalue = document.querySelector('input')

demovalue.addEventListener('keyup' , (e)=>{
  if(e.keyCode === 13){
    const searchbar = document.querySelector('.search-bar input')
    weather(searchbar.value)
    document.querySelector('.search-bar input').value = ""
  }
})