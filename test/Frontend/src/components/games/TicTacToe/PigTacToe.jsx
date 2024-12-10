import { useState, useEffect, useRef } from 'react';
import { Animalese } from "../../../animalese/animalese" 
import animaleseWav from '../../../animalese/animalese.wav'

import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.REACT_APP_API_KEY, dangerouslyAllowBrowser: true })

export default function PigTacToe() {
    const [titoText, setTitoText] = useState("")
    const [userInput, setUserInput] = useState("")
    const [messages, setMessages] = useState([
        {role: 'system', content: 'You are a lazy cockroach named tito with the personality of tony soprano. You are playing a game of tic tac toe and the player is trying to make you play a move. Stall for as long as possible and keep your response brief but bust the guys balls.'},
        {role: 'user', content: 'Can you please play a move?'},
        {role: 'assistant', content: 'Pal you sound just like my muddah'}
    ])
    const textAreaRef = useRef(null)

    const [friendText, setFriendText] = ("")

    const [userMark, setUserMark] = useState("X")
    const [board, setBoard] = useState([])

    const EnterHandler = event => {
        if (event.key === "Enter") {
            CallChatGPTResponse()
        }
    }

    // have a user talk to tito
    const CallChatGPTResponse = async () => {
        const input = userInput
        console.log(input)
        setUserInput("")
        setTitoText("")

        // const send = messages

        // send.push({ role: 'user', content: input })
        // setMessages(send)

        // const response = await openai.chat.completions.create({
        //     model: 'gpt-4o-mini',
        //     messages: send
        // })

        // const responseMessage = response.choices[0].message

        // console.log(responseMessage)
        // setMessages(prev => [
        //     ...prev,
        //     {role: 'assistant', content: responseMessage.content}
        // ])
        // preview(responseMessage.content)

        // // print out character at a time
        // responseMessage.content.split("").forEach((char, index) => {            
        //     setTimeout(() => {
        //         setTitoText(prev => prev + char)
        //     }, 225+index*50)
        // })

        // testing with no chatGPT
        preview(input)
        input.split("").forEach((char, index) => {            
            setTimeout(() => {
                setTitoText(prev => prev + char)
            }, 200+index*50)
        })
    }

    const allMessages = [{role: "replace", content: "replace"}]

    const titoStart =
        {role: "system", content: "You are a fat cockroach named tito with the personality of Tony Soprano. You bump into one of your accomplices. Have a conversation like the Sopranos but you're a lazy cockroach."}
    const TitoToFriend = async (start) => {
        if (start && allMessages.length === 1) {
            allMessages.push({})
        }
    }

    const friendStart = 
        {role: "system", content: "You are a timid cockroach goon who is bumping into his mob cockroach boss with the personality of Tony Soprano. Have a conversation like the sopranos but you're a cockroach"}
    const FriendToTito = async (start) => {
        
    }

    let synth = new Animalese(animaleseWav, function() {
    });
      
    function generateWav(text) {
                                  // text   shorten  pitch
        return synth.MakeAnimalese(text, false, 0.3).dataURI
    }
      
    function preview(text) {
        console.log(text)
        const audio = new Audio(generateWav(text))
        audio.play()
    }

    // keep the text scrolled to the bottom
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight
        }
    }, [titoText])

    const TicClick = (id) => {
        console.log(`clicked ${id}`)
        const tempBoard = board
        tempBoard[id[0]*3 + id[1] * 1] = <button>X</button>
        setBoard(tempBoard)
    }



    // useEffect(() => {
    //     for (let i=0; i<3; i++) {
    //         for (let j=0; j<3; j++) {
    //             setBoard(prev => [
    //                 ...prev,
    //                 <button id={i.toString() + j.toString()} onClick={e => TicClick(e.currentTarget.id)} ></button>
    //             ])
    //         }
    //     }
    // }, [])

    return (
        <div style={{ display: 'flex', gap: 50}}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 50, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/games/TicTacToe/tito.png" alt="tito" height={300} width={300}></img>

                    <textarea
                        ref={textAreaRef}
                        style={{
                            flexGrow: 1,         // Makes the textarea take up remaining space
                            padding: '10px',     // Adds padding inside the textarea
                            resize: 'none',      // Disables resizing of the textarea
                            minHeight: '100px',  // Minimum height of the textarea
                            width: '300px',       // You can set a fixed width or leave it flexible
                            overflow: 'hidden'
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
            
            {/* <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/games/TicTacToe/friend.png" alt="tito" height={100} width={100}></img>

                    <textarea
                        ref={textAreaRef}
                        style={{
                            flexGrow: 1,         // Makes the textarea take up remaining space
                            padding: '10px',     // Adds padding inside the textarea
                            resize: 'none',      // Disables resizing of the textarea
                            minHeight: '100px',  // Minimum height of the textarea
                            width: '300px',       // You can set a fixed width or leave it flexible
                            overflow: 'hidden'
                        }}
                        value={titoText}
                        readOnly
                    ></textarea>
                </div> */}

            {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridTemplateRows: 'repeat(3, 100px)', height: '300px', width: '300px', backgroundColor: 'darkgray' }} width={500} height={500}>
                {board}
            </div> */}
        </div>
    )
}