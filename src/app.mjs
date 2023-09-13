import hbs from 'hbs'
import path from 'path'
import express, { response } from 'express'

import geocode from './utilits/geocode.mjs'
import weather from './utilits/weather.mjs'
import time from './utilits/time.mjs'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import { error } from 'console'




const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

const pathpublic=path.join(__dirname,'../public')
const pathview=path.join(__dirname,'/templates/views')
const pathpartials=path.join(__dirname,'/templates/partials')

const app=express()


app.set('view engine','hbs')
app.set('views',pathview)

hbs.registerPartials(pathpartials)
app.use(express.static(pathpublic))

app.get('',(req,res)=>{
    res.render('index')
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.render('weather');
    }

    geocode(req.query.address,(error,response)=>{
        if(error){
            return res.send({error})
        }weather(response,(error,data)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast : data,
                address : req.query.address
            })
        })
    })
})


app.get('/time',(req,res)=>{
    if(!req.query.address){
        return res.render('time')
    }

    geocode(req.query.address,(error,response)=>{
        if(error){
            return res.send({error})
        }time(response,(error,data)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                time : data,
                address : req.query.address
            })
        })
    })
})

app.listen(3000,()=>{
    console.log('loading... ')
})