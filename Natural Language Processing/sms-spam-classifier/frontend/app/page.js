"use client"

import Image from "next/image"
import { useState } from "react"

const Home = () => {

  const [text, setText] = useState("")
  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  const handleOnChange = (e) => {
    setText(e.target.value)
  } 
  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSubmit(true)

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          text: text
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
  
      if (response.ok) {
        const data = await response.json()
        setResult(data.result)
      }
      else {
        throw new Error(response.error.message)
      }
    }

    catch (error) {
      setError(error.message)
    }

    finally {
      setTimeout(() => {
        setSubmit(false)
        setError(null)
        setResult(null)
      }, 7000)
    }
  }

  return (
    <div className="flex flex-col gap-[100px] items-center justify-center">
      <div className="flex items-center gap-[50px]">
        <Image src="/logo.svg" width={0} height={0} className="w-[100px]" alt="SpamGuard Logo" />
        <h1 className="font-Montserrat font-semibold text-[50px] text-white">
          SpamGuard
        </h1>
      </div>
      <h2 className="font-Poppins font-medium text-lg text-white">
        Enter a text below to check if its spam or not
      </h2>
      <textarea type="text" onChange={handleOnChange} className="w-[75%] bg-gray-800 p-[30px] font-Quicksand font-normal text-base text-white" /> 
      {error !== null ? (
        <h3 className="font-Quicksand font-medium text-base text-white">
          {error}
        </h3> 
      ) : result !== null ? (
        <h3 className="font-Quicksand font-medium text-base text-white">
            This SMS is <span className={result === "spam" ? "text-red" : "text-green"}>{result}</span> 
        </h3>
        ) : (
        <button type="submit" onClick={handleSubmit} className="bg-[#] p-4 font-Quicksand font-medium text-base text-white">
          {submit ? "Classifying..." : "Submit"}
        </button>
        )
      }
    </div>
  )
}

export default Home