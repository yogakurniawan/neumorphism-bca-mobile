import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 16px;
  background: #ececec;
  box-shadow: 5px 5px 8px #bfbfbf, -5px -5px 8px #ffffff;
  border: none;
  outline: none;
  position: relative;
  margin: auto;
  color: rgb(2, 77, 153);
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  svg {
    color: rgb(2, 77, 153);
  }
  &:active:hover {
    box-shadow: inset 1px 1px 2px #bfbfbf, inset -1px -1px 2px #ffffff;
    svg {
      color: rgb(0, 127, 255);
    }
    color: rgb(0, 127, 255);
  }
`

const BigButton = styled(Button)`
  height: 120px;
  width: 120px;
  &:hover {
    transition: height 0.5s ease;
    height: 150px;
  }
`
const SmallButton = styled(Button)`
  height: 60px;
  width: 60px;
  border-radius: 20px;
`
const LongButton = styled(Button)`
  height: 50px;
  width: 100%;
`

export default function MenuButton(props) {
  if (props.type === 'small') {
    return <SmallButton>{props.children}</SmallButton>
  } else if (props.type === 'big') {
    return <BigButton>{props.children}</BigButton>
  } else {
    return <LongButton>{props.children}</LongButton>
  }
}
