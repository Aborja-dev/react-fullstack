import { useState } from 'react'

export const InputFormText = ({setText})=>{
    const [newText, setNewText] = useState('')
    const changeText = (event)=>{
        setNewText(event.target.value)
        setText(event.target.value)
    }

    return (
        <div>
            <input value={newText} onChange={changeText}/>
        </div>
    )
}