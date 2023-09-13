const timeform=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#m1')
// msg1.textContent=''


timeform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location=search.value
    msg1.textContent='Loading....'
    fetch('/time?address='+location).then
    ((response)=>{
        response.json().then((data)=>{
            if(data.error){
                msg1.textContent=data.error
            }else{
                msg1.textContent=data.time
            }
        })
    })

})