"use client"
import Image from "next/image";
import React, { useState } from "react";
import ModalFirst from '@/components/ModalFirst'
import ModalSecond from '@/components/ModalSecond'

const YellowFinger = [
    <Image 
    src= "/assets/YellowFinger.png"
    alt="YellowFinger"
    width={48.26}
    height={48.26}
  />
]
const BlueFinger = [
    <Image 
    src= "/assets/BlueFinger.png"
    alt="BlueFinger"
    width={48.26}
    height={48.26}
  />
]

  
export default function Buttons(){
    const [ShowMyModal, setShowMyModal] = useState(false)
    const handleOnClose = () => setShowMyModal(false)

    const [ShowMySecondModal, setShowMySecondModal] = useState(false)
    const handleOnCloseSecond = () => setShowMySecondModal(false)

    return (
                 <div className="flex flex-col absolute w-full items-end gap-[186px] mt-[15px] pr-[20px] "> 
                  <button onClick={() => setShowMyModal(true)}> {BlueFinger} </button>
                  <button className="sm:max-2xl:mt-[120px]" onClick={() => setShowMySecondModal(true)}>  {YellowFinger} </button>
                  <ModalFirst onClose={handleOnClose} visible = {ShowMyModal}/>
                  <ModalSecond onCloseSecond={handleOnCloseSecond} visibleSecond = {ShowMySecondModal}/>
                 </div>
            );
}