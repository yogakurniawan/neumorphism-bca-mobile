import React from 'react'
import styled from 'styled-components'
import Flex from 'styled-flex-component'
import ChequeIcon from 'icons/Cheque'
import MenuButton from './MenuButton'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 480px;
  width: 100%;
  z-index: 100;
  padding: 10px 20px;
  box-shadow: -2px -2px 8px #ffffff;
`

export default function Toolbar(props) {
  return (
    <Container>
      <Flex justifyBetween>
        <MenuButton type="small">
          <ChequeIcon height="16px" width="16px" />
        </MenuButton>
        <MenuButton type="small">
          <ChequeIcon height="16px" width="16px" />
        </MenuButton>
        <MenuButton type="small">
          <ChequeIcon height="16px" width="16px" />
        </MenuButton>
        <MenuButton type="small">
          <ChequeIcon height="16px" width="16px" />
        </MenuButton>
        <MenuButton type="small">
          <ChequeIcon height="16px" width="16px" />
        </MenuButton>
        <MenuButton type="small">
          <ChequeIcon height="16px" width="16px" />
        </MenuButton>
      </Flex>
    </Container>
  )
}
