const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#m1')

weatherform.addEventListener('submit',(e)=>{   
    e.preventDefault()
    const location=search.value
    msg1.textContent='Loading...'
    // msg2.textContent=''

    // console.log(location)
    fetch('http://localhost:3000/weather?address='+location).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            msg1.textContent=data.error
        }else{
        // console.log(data.forecast)
        // console.log(data.address)
        // msg1.textContent=data.address
        // search.reset()
        // msg1.textContent=data.address
        msg1.textContent=data.forecast
        }
    })
})
})