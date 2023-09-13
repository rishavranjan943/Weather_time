import request from "postman-request";


const time=(location,callback)=>{
    const url='https://api.timezonedb.com/v2.1/get-time-zone?key=2YQYCFKJZ4JG&format=json&by=position&lat='+location.latitude+'&lng='+location.longitude
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback("Unable to fetch ur information",undefined)
        }else if(response.body.error){
            callback("Try with anthoer location we are unable to fetch ur location",undefined)
        }else{
            callback(undefined,`${location.location.split(' ')[0]} comes under ${response.body.zoneName} timezone and current time their according to GMT is ${response.body.formatted.split(' ')[1]}`)
        }
    })
}

export default time