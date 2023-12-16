"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { ReactSketchCanvas } from "react-sketch-canvas"

const Home = () => {
  const sketchRef = useRef(null)
  const [submit, setSubmit] = useState(false)
  const [error, setError] = useState(null)
  const [prediction, setPrediction] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    setSubmit(true)

    try {
      const image = await sketchRef.current.exportImage("png")
      const response = await fetch("https://digrec.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        mode: "cors",
        body: JSON.stringify({image : image})
      })

      if (response.ok) {
        const data = await response.json()
        setPrediction(data["prediction"])
      }
      
      
      else {
        const data = await response.json()
        throw new Error(data["error"])
      }
    }

    catch (error) {
      setError(error.message)
    }

    finally {
      setTimeout(() => {
        setSubmit(false)
        setError(null)
        setPrediction(null)
      }, 5000)
    }
  }

  const handleClear = () => {
    sketchRef.current.clearCanvas()
    setSubmit(false)
    setError(null)
    setPrediction(null)
  }

  return (
    <div className="flex flex-col lg:gap-[100px] sm:gap-[75px] xs:gap-[50px] items-center justify-center">
      <div className="flex items-center justify-center lg:gap-[50px] sm:gap-[35px] xs:gap-[20px]">
        <Image src="/logo.svg" width={0} height={0} className="lg:w-[100px] sm:w-[75px] xs:w-[50px]" alt="SpamGuard Logo" />
        <h1 className="font-Montserrat font-semibold lg:text-[50px] sm:text-[35px] xs:text-[20px] text-white">
          DigRec
        </h1>
      </div>
      <h2 className="font-Poppins font-semibold text-center lg:text-lg sm:text-base xs:text-sm text-white">
        Draw a number below
      </h2>
      <div className="bg-white w-[50%] lg:h-[300px] sm:h-[250px] xs:h-[200px]">
        <ReactSketchCanvas
            ref={sketchRef}
            width="100%"
            height="100%"
            canvasColor="white"
            strokeColor="black"
            strokeWidth={10}
          />
      </div>
      {error !== null ? (
        <h3 className="font-Quicksand font-medium text-base text-white">
          {error}
        </h3> 
      ) : prediction !== null ? (
        <h3 className="font-Quicksand font-medium lg:text-[25px] sm:text-[20px] xs:text-[15px] sm:text-base xs:text-sm text-white">
            This number is <span className="text-[#4facfe]">{prediction}</span> 
        </h3>
        ) : (
            <div className="flex items-center justify-center lg:gap-[100px] sm:gap-[50px] xs:gap-[25px]">
              <button type="submit" onClick={handleSubmit} className="bg-gradient-to-b from-[#4facfe] to-[#00f2fe] lg:px-[40px] sm:px-[30px] xs:px-[20px] lg:py-[20px] sm:py-[15px] xs:py-[10px] rounded-[12px] font-Quicksand font-semibold lg:text-[25px] sm:text-[20px] xs:text-[15px] text-white">
                {submit ? "Guessing..." : "Guess The Number"}
              </button>
              <button type="submit" onClick={handleClear} className="bg-gradient-to-b from-[#4facfe] to-[#00f2fe] lg:px-[40px] sm:px-[30px] xs:px-[20px] lg:py-[20px] sm:py-[15px] xs:py-[10px] rounded-[12px] font-Quicksand font-semibold lg:text-[25px] sm:text-[20px] xs:text-[15px] text-white">
                Clear
              </button>
            </div>
       
        )
      }
    </div>
  )
}

export default Home