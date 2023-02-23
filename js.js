// xtUhuSAaHnb5O8slxLflRE6leY5AlpEt


// http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=xtUhuSAaHnb5O8slxLflRE6leY5AlpEt&q=azab


// http://dataservice.accuweather.com/forecasts/v1/daily/5day/2410237?apikey=xtUhuSAaHnb5O8slxLflRE6leY5AlpEt



const cityname = document.getElementById("cityname")
const country = document.getElementById("country")
const sebot = document.getElementById("sebot")
const apikays = '849fbfa06fffc2c4d8818ffa66608a90'
const innerdata = document.getElementById("innerdata")

sebot.addEventListener("click" , () => {


   
    
const fetchweather = async function () {
    
const responsive = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apikays}`)

const responsivejson =await responsive.json()
return responsivejson;

}


const weatherdata = fetchweather()
weatherdata.then((data)=>{

    let html = `<div class="col-lg-4 col-md-12">

    <div class="days">
    <h6>Friday</h6>
    <h6>19 Febrauary</h6>
    </div>
    
    
    <h6 class="mt-4 fs-5 start px-3" id="country">${data.name}</h6>
    <h4 class="agree px-3 mt-4 d-inline">${(data.main.temp - 273.15).toFixed(2)}°C</h4>
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <p class="mt-2 text-info px-3">${data.weather[0].main}</p>
    
    <div class="d-flex align-items-center mb-4">
    
    <p class="px-3"><span class="icon-phone px-1"></span>20%</p>
    <p class="px-3"><span class="icon-hipster px-1"></span>18m/h</p>
    <p class="px-3"><span class="icon-sleepy px-1"></span>East</p>
    
    </div>
    
    </div>
    
    
    
    
    <div class="col-lg-4 col-md-12 diff text-center">

    <div class="one ">
    <h6>Saturday</h6>

    </div>
    
    
    <img src="03d@2x.png" alt="">
    <h1 class="mt-4">${(data.main.temp_max - 271.31).toFixed(2)}°C</h1>
    <p>${(data.main.temp_min - 274.40).toFixed(2)}°</p>
    <p class="mt-4 text-info">clear sky
    </p>
    

</div>



<div class="col-lg-4 col-md-12 text-center">

    <div class="one ">
    <h6>Sunday</h6>

    </div>
    
    
    <img src="02n@2x.png" alt="">
    <h1 class="mt-4">${(data.main.temp_max - 272.63).toFixed(2)}°C</h1>
    <p>${(data.main.temp_min - 275.27).toFixed(2)}°</p>
    <p class="mt-4 text-info">few clouds
    </p>
    

</div>
    
    
    
    `

    innerdata.innerHTML = html
console.log(data)
console.log(data.name)



})

    
})







