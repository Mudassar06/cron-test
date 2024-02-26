'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default async function page() {

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