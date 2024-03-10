"use client"
import MainBl from '@/components/MainBl'
import SubBlockTherapy from '@/components/SubBlockTherapy'
import Image from 'next/image'
import React, { useState } from "react";
import SubBlock from '@/components/SubBlock'
import Buttons from '@/components/Buttons'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-stone-50 to-sky-100 w-auto h-auto">
    <div className="mt-[100px] mx-[100px] lg:mx-[20px] 2xl:mt-[140px] 2xl:mx-[270px] relative sm:border rounded-md items-center bg-[#FFFFFF] shadow-2xl">
    <MainBl/>
    <Buttons/>
    <SubBlock/>
    <SubBlockTherapy/>
    </div>
  </main>
  )    
}
