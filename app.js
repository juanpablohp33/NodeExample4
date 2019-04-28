const request = require('request')

const url ='https://api.darksky.net/forecast/3822aecdaa873dca548e7c4339a9e02b/37.8267,-122.4233'

request({
    url:url
}, (error,response)=> {
    console.log(response)
})