import { config } from 'dotenv'
config()

import { test, describe, it } from 'node:test'
import { ok, deepStrictEqual } from 'node:assert'
import { get } from 'node:http'
import { json } from 'stream/consumers'


describe('student routes test suite', () => {

    it('should receive 500 status', async() =>{
        await fetch(`${process.env.HOST}:${process.env.PORT}/student`, {
            method: 'post',
            mode: 'cors'
        })
            .then(res => {
                deepStrictEqual(res.status, 500)
            })
    })

    it('should receive "missing name"', () => {
        
        get(`${process.env.HOST}:${process.env.PORT}`, async(res) => {

            res.on('data', (data) => {
                deepStrictEqual(JSON.parse(data), 'name is missing')
            })
        })
    })

})