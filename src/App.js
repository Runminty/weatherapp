import React from 'react'
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'


const API_KEY = 'ffccc7f6e334c1e6c379fe17a11e7835'
export default class App extends React.Component {
  state ={

    temperature:undefined,
    humidity:undefined,
    city:undefined,
    description:undefined,
    wind:undefined,
    country:undefined,
    error: undefined
  }
getWeather = async (e) => {
  e.preventDefault()
  const city = e.target.elements.city.value

  const country = e.target.elements.country.value

  

  const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
  const data = await api_call.json()
  if (city && country){
  console.log (data)
  this.setState({
    temperature: data.main.temp,
    humidity: data.main.humidity,
    city:data.name,
    country:data.sys.country,
    wind:data.wind.speed,
    description: data.weather[0].description,
    error:""


  })
} else {
  this.setState({
    temperature: undefined,
    humidity: undefined,
    city:undefined,
    country:undefined,
    wind:undefined,
    description: undefined,
    error:"please enter the correct value"


  })
}
}
render () {
  return(
    <div>
     
        <div className='header'>
           <Titles />
        </div>  
        <div className='container'>
            <div className='form'>
      <Form getWeather={this.getWeather}/>
      </div>
                <div className='weather-info'>
                    <Weather
                    temperature={this.state.temperature}
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country ={this.state.country}
                    wind={this.state.wind}
                    description={this.state.description}
                    error ={this.state.error}/> 
                
                </div>
        
            </div>
         <footer>Copyright Jennifer</footer>
    </div>
   
    
  )
}


}