import request from "postman-request";

const geocode = (address,callback) => {
    const url='https://us1.locationiq.com/v1/search?key=pk.9676da57a6410ded10940cc0092dcddf&q='+encodeURIComponent(address)+'&format=json&limit=1'
    request({url :url,json : true},(error,response)=>{
        if(error){
            callback("Unable to fetch the information",undefined)
        }else if(response.body.error){
            callback("Try with anthoer location we are unable to fetch the information",undefined)
        }else{
            callback(undefined,{
                latitude : response.body[0].lat,
                longitude : response.body[0].lon,
                location : response.body[0].display_name 
            })
        }
    })
}

export default geocode