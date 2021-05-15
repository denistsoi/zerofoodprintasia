import { useEffect, useRef } from "react"
import { createWidget } from "@typeform/embed"
import "@typeform/embed/build/css/widget.css" // import necessary CSS

export const JoinForm = () => {
  const container = useRef()

  useEffect(() => {
    createWidget("BBECxqA2", {
      container: container.current,
    })
  }, [])

  return (
    <>
      <button className="border border-white">Enquire Now!</button>
      <div ref={container} />
    </>
  )
}
