import React from 'react'
import styled from 'styled-components'
import Div from './Div'

const GreetingText = styled.div`
  font-size: 1rem;
  font-weight: 700;
`

const UserName = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`

export default function Greeting(props) {
  return (
    <Div my="1.5rem">
      <GreetingText>Selamat Datang,</GreetingText>
      <UserName>Yoga Kurniawan</UserName>
    </Div>
  )
}
