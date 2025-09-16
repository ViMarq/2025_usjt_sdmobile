require('dotenv').config()
const axios = require('axios')
// const APPID = process.env.APPID
// const PROTCOL = process.env.PROTOCOL
// const BASE_URL = process.env.BASE_URL
// const Q = process.env.Q
// const CNT = process.env.CNT
// const UNITS = process.env.UNITS
// const LANG = process.env.IDIOM

//operador de desestruturação do js

const {
    APPID,
    PROTOCOL,
    BASE_URL,
    Q,
    CNT,
    UNITS,
    IDIOM: LANG
} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&q=${Q}&cnt${CNT}&units=${UNITS}&lang=${LANG}`

axios.get(url)
.then(res => {
    console.log(res.data)
    console.log('Exibindo o dt')
    console.log(new Date(Number(res.data.list[0].dt)*1000))
    console.log(new Date(Number(res.data.list[1].dt)*1000))
})