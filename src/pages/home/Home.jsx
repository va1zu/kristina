import React from 'react'
import cl from './Home.module.css'
import kitty from '../../assets/hellokitty.png'

const Home = () => {
  return (
    <>
    <div className={cl.container}>
      <div className={cl.text}>
      <h1 className={cl.kris}>Кристинка</h1>
      <img src={kitty} alt="kitty" />
      </div>
    </div>
    </>
  )
}

export default Home
