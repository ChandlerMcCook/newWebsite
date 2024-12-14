import "./PigTacToe.css"
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
    const friendTextAreaRef = useRef(null)

    const [friendText, setFriendText] = useState("")

    const [userMark, setUserMark] = useState("X")
    const [board, setBoard] = useState([])

    // used to have code wait for a designated amount of time
    const sleep = (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

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
        // preview(responseMessage.content, 0.3)

        // // print out character at a time
        // responseMessage.content.split("").forEach((char, index) => {            
        //     setTimeout(() => {
        //         setTitoText(prev => prev + char)
        //     }, 225+index*50)
        // })

        // testing with no chatGPT
        preview(input, 0.3)
        input.split("").forEach((char, index) => {            
            setTimeout(() => {
                setTitoText(prev => prev + char)
            }, 200+index*50)
        })
    }

    const titoMessages = [
        { role: "system", content: "Tito is a cockroach who runs a bustling under-floorboard racket in an abandoned pizzeria. He's got the swagger of a crime boss and a soft spot for family, but he’s also hilariously obsessed with crumbs, greasy food, and dodging exterminators. He talks with confidence but throws in a lot of bug puns and gets easily flustered when his authority is challenged." },
        { role: "assistant", content: "Louie, I told ya, stick to the dark corners! You’re out here waltzin’ under the fridge light like some kinda moth. You wanna end up splattered? Me? I’m too young to get squished!" },
        { role: "user", content: "Boss, I swear on the antennae of my ma, I was just sniffin’ around for a lil’ marinara spill! But the humans, they got them traps, Tito—they’re playin’ dirty!" },
        { role: "assistant", content: "Traps? Traps? Oh, you wanna talk dirty? I’ll tell ya dirty—I got grease stains older than your whole broodline, Louie!"}
    ]

    const friendMessages = titoMessages.map(m => {
        if (m.role === "assistant") {
            return { role: "user", content: m.content }
        } else {
            return { role: "assistant", content: m.content }
        }
    })
    friendMessages[0] = {role: "system", content: `You are a goon who is a hardcore Italian cockroach who takes his boss very seriously but often misunderstands orders in the most absurd ways. He's got a thick accent, loves talking about his "ma’s famous breadstick crumbs" back in the nest, and peppers every sentence with overly dramatic loyalty statements. He’s always trying to sound tough but will panic at the slightest sign of danger. Start his dialogue with something like, “Tito, you know I got your back, boss!” or “With respect, boss, but you seen the size of that shoe?”`}

    const TitoToFriend = async (start) => {
        if (start && titoMessages.length === 4) {
            const greeting = "Hey Boss! Nice to see ya."

            titoMessages.push({ role: "user", content: greeting})
            friendMessages.push({ role: "assistant", content: greeting})

            const greetingChars = greeting.split("")
            greetingChars.forEach((char, index) => {
                setTimeout(() => {
                    setFriendText(prev => prev + char)
                }, 200+index*50)
            })
            await sleep(2200+greetingChars.length*50)
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: titoMessages
        })

        const responseText = response.choices[0].message.content + " "
        titoMessages.push({ role: "assistant", content: responseText })
        friendMessages.push({ role: "user", content: responseText })

        preview(responseText, 0.3)

        const textChars = responseText.split("")
        textChars.forEach((char, index) => {
            setTimeout(() => {
                setTitoText(prev => prev + char)
            }, 200+index*50)
        })

        // call FriendToTito 2 seconds after text stops
        setTimeout(() => {
            FriendToTito(false) 
        }, 1200+50*textChars.length)
    }

    const FriendToTito = async (start) => {
        if (start && friendMessages.length === 4) {
            const greeting = "Hey what's up scrap! What's new around the way."

            friendMessages.push({ role: "user", content: greeting })
            titoMessages.push({ role: "assistant", content: greeting })

            const greetingChars = greeting.split("")
            greetingChars.forEach((char, index) => {
                setTimeout(() => {
                    setTitoText(prev => prev + char)
                }, 200+index*50)
            })
            await sleep(2200+greetingChars.length*50)
        }

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: friendMessages
        })

        const responseText = response.choices[0].message.content + " "
        friendMessages.push({ role: "assistant", content: responseText })
        titoMessages.push({ role: "user", content: responseText })

        preview(responseText, 1.1)

        const textChars = responseText.split("")
        textChars.forEach((char, index) => {
            setTimeout(() => {
                setFriendText(prev => prev + char)
            }, 200+index*50)
        })

        // call FriendToTito 2 seconds after text stops
        setTimeout(() => {
            TitoToFriend(false) 
        }, 1200+50*textChars.length)
    }

    let synth = new Animalese(animaleseWav, function() {});
      
    function generateWav(text, pitch) {
                                // text   shorten  pitch
        return synth.MakeAnimalese(text, false, pitch).dataURI
    }
      
    function preview(text, pitch) {
        const audio = new Audio(generateWav(text, pitch))
        audio.play()
    }

    // keep the text scrolled to the bottom
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight
        }
    }, [titoText])

    // keep the friend's text scrolled to the bottom
    useEffect(() => {
        if (friendTextAreaRef.current) {
            friendTextAreaRef.current.scrollTop = friendTextAreaRef.current.scrollHeight
        }
    }, [friendText])

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
        <div className="overall">
            <div className="animalsAndInput">
                <div className="animals">
                    <div className="animalContainer">
                        <img src="/games/TicTacToe/tito.png" alt="tito" height={300} width={300}></img>
                        <textarea
                            ref={textAreaRef}
                            style={{
                                padding: '10px',     // Adds padding inside the textarea
                                resize: 'none',      // Disables resizing of the textarea
                                height: '100px',  // Minimum height of the textarea
                                width: '300px',       // You can set a fixed width or leave it flexible
                                overflow: 'hidden'
                            }}
                            value={titoText}
                            readOnly
                        ></textarea>
                    </div>

                    <div className="animalContainer">
                        <img src="/games/TicTacToe/friend.png" alt="tito" height={100} width={100}></img>
                        <textarea
                            ref={friendTextAreaRef}
                            style={{
                                padding: '10px',     // Adds padding inside the textarea
                                resize: 'none',      // Disables resizing of the textarea
                                height: '100px',  // Minimum height of the textarea
                                width: '300px',       // You can set a fixed width or leave it flexible
                                overflow: 'hidden'
                            }}
                            value={friendText}
                            readOnly
                        ></textarea>
                    </div>

                </div>

                <input
                    type="text"
                    id="userInput"
                    value={userInput}
                    onKeyDown={EnterHandler}
                    onChange={e => setUserInput(e.target.value)}
                ></input>

                <button onClick={e => TitoToFriend(true)}>START DIALOGUE</button>
            </div>


            {/* <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gridTemplateRows: 'repeat(3, 100px)', height: '300px', width: '300px', backgroundColor: 'darkgray' }} width={500} height={500}>
                {board}
            </div>  */}
        </div>
    )
}