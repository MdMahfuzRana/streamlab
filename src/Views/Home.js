import React from 'react'
import CarouselCom from '../Components/Carosel/CarouselCom'
import Header from '../Components/Header/Header'
import SerialVideosCatologo from '../Components/VideosSlider/SerialVideosCatologo'

function Home() {
  return (
    <div>
        <Header/>
        <CarouselCom/>
        <SerialVideosCatologo/>
        <SerialVideosCatologo/>
        <CarouselCom/>
        <SerialVideosCatologo/>
    </div>
  )
}

export default Home