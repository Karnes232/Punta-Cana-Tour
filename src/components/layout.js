import React from "react"
import Header from "../components/HeaderComponents/Header"
import Footer from "./FooterComponent/Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen font-montserrat flex flex-col justify-between overflow-x-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
