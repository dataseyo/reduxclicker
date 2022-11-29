import React, { useState, useEffect } from 'react'

import './styles.css'
import Screen from '../Screen/Screen'

import { useAppDispatch, useAppSelector } from '../../State/stateHooks'
import { increment } from '../../State/gameSlice'

const GameLoop = () => {
    // STATE
    const [gameState, setGameState] = useState({
        currency: 0,
        clickPower: 10,
        currencyPerMs: .001
    })

    const [totalTime, setTotalTime] = useState(0)

    const currency = useAppSelector((state) => state.game.currency)
    const dispatch = useAppDispatch()

    // CLICKER
    const handleClick = () => {
        setGameState(prevState => ({
            ...prevState,
            currency: parseFloat((prevState.currency + prevState.clickPower).toFixed(2))
        }))

        console.log("clicked")
    }

    // UPDATE FUNCTION
    const updateGame = (delta_time: number) => {
        setGameState(prevState => ({
            ...gameState,
            currency: parseFloat((prevState.currency + prevState.currencyPerMs * delta_time).toFixed(2))
        }))
        
    }

    // GAME LOOP EFFECT
    useEffect(() => {
        let last_time: null | number = null
        const loop = setInterval(() => {
            const time_now = Date.now()
            if (last_time === null) {
                last_time = time_now
            }
            const delta_time = time_now - last_time
            setTotalTime(prevTotalTime => prevTotalTime + delta_time)
            last_time = time_now 

            updateGame(delta_time)
        }, 1000 / 60) // fps

        return () => clearInterval(loop)
    }, [])

    // GAME LOOP REDUX
    useEffect(() => {
        let last_time: null | number = null
        const loop = setInterval(() => {
            const time_now = Date.now()
            if (last_time === null) {
                last_time = time_now
            }
            const delta_time = time_now - last_time
            setTotalTime(prevTotalTime => prevTotalTime + delta_time)
            last_time = time_now 

            dispatch(increment(delta_time))
        }, 1000 / 60) // fps

        return () => clearInterval(loop)
    }, [])

    return (
        <div className="game-loop__container">
            Clicks: {gameState.currency}
            <Screen 
                handleClick={handleClick}
            />

            Redux: {currency}
        </div>
  )
}

export default GameLoop