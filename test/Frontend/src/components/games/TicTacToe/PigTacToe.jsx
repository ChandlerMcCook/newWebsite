import { useState } from 'react';
import tito from "../../../images/tito.png"

import { Animalese } from "../../../animalese/animalese" 
import animaleseWav from '../../../animalese/animalese.wav'

import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true })

export default function PigTacToe() {
    const [titoText, setTitoText] = useState("")
    const [userInput, setUserInput] = useState("")
    const [messages, setMessages] = useState([
        {role: 'system', content: 'You are a lazy, distracted, Italian cockroach named Tito. You are playing a game of tic tac toe and the player is trying to make you play a move. Stall for as long as possible.'},
        {role: 'user', content: 'Can you please play a move?'},
        {role: 'assistant', content: 'Pal you sound just like my muddah'}
    ])

    const EnterHandler = event => {
        if (event.key === "Enter") {
            CallChatGPTResponse()
        }
    }

    let defaultMessages = [
        {role: 'system', content: 'You are a lazy, distracted, concise, dumb, Italian cockroach named Tito. You are playing a game of tic tac toe and the player is trying to make you play a move. Stall for as long as possible and keep your response similar to this example and be insulting.'},
        {role: 'user', content: 'Can you please play a move?'},
        {role: 'assistant', content: 'Pal you sound just like my muddah'}
    ]

    const CallChatGPTResponse = async () => {
        const input = userInput
        console.log(input)
        setUserInput("")
        setMessages(prev => [
            ...prev,
            {role: 'user', content: input}
        ])

        console.log(messages)

        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages
        })

        console.log(response.choices[0].message)
        setMessages(prev => [
            ...prev,
            {role: 'assistant', content: response.choices[0].message.content}
        ])
        setTitoText(response.choices[0].message.content)
        preview()
    }

    let synth = new Animalese(animaleseWav, function() {
    });
      
    function generateWav() {
        return synth.MakeAnimalese(titoText, true, 0.3).dataURI
    }
      
    function preview() {
        const audio = new Audio(generateWav())
        audio.play()
    }

    let board = [];
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            
        }
    }

    return (
        <div style={{ display: 'flex', gap: 50}}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'center' }}>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={tito} alt="tito" height={300} width={300}></img>

                    <textarea
                        style={{
                            flexGrow: 1,         // Makes the textarea take up remaining space
                            padding: '10px',     // Adds padding inside the textarea
                            resize: 'none',      // Disables resizing of the textarea
                            minHeight: '200px',  // Minimum height of the textarea
                            width: '400px',       // You can set a fixed width or leave it flexible
                            animation: 'typing 2s;'
                        }}
                        value={titoText}
                        readOnly
                    ></textarea>
                </div>

                <input
                    type="text"
                    id="userInput"
                    value={userInput}
                    onKeyDown={EnterHandler}
                    onChange={e => setUserInput(e.target.value)}
                ></input>

            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridTemplateRows: 'repeat(3, 100px)', height: '300px', width: '300px', backgroundColor: 'darkgray' }} width={500} height={500}>
                for ()
            </div>
        </div>
    )
}