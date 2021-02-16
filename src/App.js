import React from 'react'
import styled from 'styled-components'

// import Flex from 'styled-flex-component'
import MenuButton from 'components/MenuButton'
import Div from 'components/Div'
import Greeting from 'components/Greeting'
import Toolbar from 'components/Toolbar'
import MoneyIcon from 'icons/Money'
import PayIcon from 'icons/Pay'
import BankIcon from 'icons/Bank'
import ChequeIcon from 'icons/Cheque'
import CreditCardIcon from 'icons/CreditCard'

const Container = styled.div`
  width: 100%;
`

const Menu = styled(Div)`
  display: grid;
  width: 100%;
  background-color: #ececec;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
`

const Content = styled(Div)`
  width: 100%;
  min-height: 100vh;
  background-color: #ececec;
`

function App() {
  return (
    <Container>
      <Content maxWidth="480px" mx="auto">
        <Div padding="20px">
          <Greeting />
        </Div>
        <Menu padding="20px">
          <MenuButton type="big">
            <MoneyIcon height="48px" width="48px" />
            <Div mt="0.5rem">m-Info</Div>
          </MenuButton>
          <MenuButton type="big">
            <BankIcon height="48px" width="48px" />
            <Div mt="0.5rem">Transfer</Div>
          </MenuButton>
          <MenuButton type="big">
            <PayIcon height="48px" width="48px" />
            <Div mt="0.5rem">m-Payment</Div>
          </MenuButton>
          <MenuButton type="big">
            <CreditCardIcon height="48px" width="48px" />
            <Div mt="0.5rem">m-Commerce</Div>
          </MenuButton>
          <MenuButton type="big">
            <ChequeIcon height="48px" width="48px" />
            <Div mt="0.5rem">Cardless</Div>
          </MenuButton>
          <MenuButton type="big">
            <ChequeIcon height="48px" width="48px" />
            <Div mt="0.5rem">Scan QR</Div>
          </MenuButton>
          <MenuButton type="big">
            <ChequeIcon height="48px" width="48px" />
            <Div mt="0.5rem">Admin</Div>
          </MenuButton>
          <MenuButton type="big">
            <ChequeIcon height="48px" width="48px" />
            <Div mt="0.5rem">Flazz</Div>
          </MenuButton>
          <MenuButton type="big">
            <ChequeIcon height="48px" width="48px" />
            <Div mt="0.5rem">Bagibagi</Div>
          </MenuButton>
        </Menu>
        <Toolbar />
      </Content>
    </Container>
  )
}

export default App
