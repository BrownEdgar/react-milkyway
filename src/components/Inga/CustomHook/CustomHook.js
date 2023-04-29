import React, { useState } from 'react'

export default function CustomHook(initialState=[]) {
    const [value, setValue] = useState(initialState)

    const alldone = () => {
        for(let i = 0; i < alldone.lenght; i++){
            alldone[i].completed == true
            console.log(alldone)
            setValue([...alldone])
        }
    }
    return [value, {alldone}]
}
