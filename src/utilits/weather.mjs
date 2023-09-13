import request from "postman-request";


const weather=(location,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=f4eac60b7e6f4536082acff98ee6bea1&query='+location.latitude+','+location.longitude
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Unable to fetch ur information",undefined)
        }else if(response.body.error){
            callback("Try with anthoer location we are unable to fetch ur location",undefined)
        }else{
            callback(undefined,`In ${location.location.split(' ')[0]} weather is currently ${response.body.current.weather_descriptions[0]}.It is currently ${response.body.current.temperature} degress out.It feels it is ${response.body.current.feelslike}.There is ${response.body.current.precip}% chance of rain`)
        }
    })
}

export default weather