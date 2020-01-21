import React from 'react'
import styled from "styled-components/macro"
import { useState } from "react"









export const Chips = ({ title, className }) => {
  const [isClicked, setIsClicked] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState("")

  const toggleClicked = () => {
    if (isClicked === false) {
      setIsClicked(true)
      setBackgroundColor("blue")
    } else if (isClicked === true) {
      setIsClicked(false)
    }

  }

  console.log(isClicked)



  return (
    <Chip
      isClicked={false}
      className={className}
      backgroundColor={backgroundColor}
      onClick={() => toggleClicked()}>
      {title}
    </ Chip>
  )
}
// background: ${backgroundColor};


const Chip = styled.button`
display: inline-flex;

background: #f1f1f1;
color: #707070;
font-size: 14px;
border: none;
border-radius: 15px;
padding: 5px 10px;
margin: 5px;
&: hover {
background: lightgrey;
}
&: checked {
  background: hotpink;
}
`