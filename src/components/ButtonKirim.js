import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 16px;
  background: #ececec;
  box-shadow: 5px 5px 8px #bfbfbf, -5px -5px 8px #ffffff;
  height: 120px;
  width: 120px;
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

export default function MenuButton(props) {

    if (props.type === 'small') {

    }

  return <Button>{props.children}</Button>
}
