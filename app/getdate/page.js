'use client'
import React, { useEffect } from 'react'
import axios from 'axios'

export default async function Page() {

    useEffect(()=>{
        const run= async () =>{
            const res = await axios.get("/api/getdate")
            console.log(res.data)
        }
        run()
    },[])

    return (
        <div>
            HELLO
        </div>        
    )
}