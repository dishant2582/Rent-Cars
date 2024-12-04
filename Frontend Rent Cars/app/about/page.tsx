"use client"

import React from 'react'
import Why from '../components/Why'
import FAQSection from '../components/FAQSection'
import Banner from '../components/Banner'
import CardsSection from '../components/AboutPageCards'
import Features from '../components/Features'

const page = () => {
  return (
    <div>

      <CardsSection/>
      <Why/>
      <FAQSection/>
      <Banner/>
      <Features/>
    </div>
  )
}

export default page