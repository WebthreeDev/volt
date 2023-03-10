import React, { useState } from 'react'
import styled from 'styled-components'
import { Box, Flex } from '@gravis.finance/uikit'
import GravisLogo from '../../../../components/Svg/Icons/GravisLogo'
import Apps from '../Apps'
// import { useGetTokensData } from '../../../../hooks/useTokenomicsConfig'
import { MenuItemBase, MenuItems } from '../MenuItems'
import * as styles from '../../styles'
import { MobileMenu } from '../MobileMenu'
import { Button } from '../Button'
import { CloseIcon } from '../Icons'

const Root = styled(Box).attrs((props) => ({
  zIndex: 4,
  height: { _: '5.5rem', md: '7rem' },
  ...props,
}))`
  background: rgba(17, 21, 24, 0.95);
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;

  /* if backdrop support: very transparent and blurred */
  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    // cause slow performance
    //background: rgba(255, 255, 255, 0.03);
    //backdrop-filter: blur(500px);
  }
`

const StyledGravisLogo = styled(GravisLogo)`
  width: 10.8rem;
`

const MenuItem = styled(MenuItemBase)<{ active?: boolean }>`
  font-family: 'Inter', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 100%;
  letter-spacing: -0.02em;
  transition: color 100ms ease-in-out;
  color: rgba(255, 255, 255, 0.5);

  :hover,
  &[data-active='true'] {
    color: white;
  }
`

const TokensContainer = styled(Flex)`
  > div:not(:last-child) {
    margin-right: 2.2rem;
  }
`

const IconButton = styled(Button)`
  padding: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  background-color: #3e4346;
  border-radius: 41px;
`

const MenuIcon = (props: React.ComponentProps<typeof Box>) => {
  return (
    <Box
      as="svg"
      width="1.5rem"
      height="1.2rem"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 1H15" stroke="white" strokeWidth="1.5" />
      <path d="M0 6H15" stroke="white" strokeWidth="1.5" />
      <path d="M0 11H15" stroke="white" strokeWidth="1.5" />
    </Box>
  )
}

const BlurredBackground = styled(Box)<{ showBlurred: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #0a0d12;
  opacity: 0;
  z-index: 3;
  pointer-events: none;
  transition: opacity 300ms ease-in-out;

  ${({ showBlurred }) =>
    showBlurred
      ? `
    opacity: 0.7;
    pointer-events: all;
  `
      : ''}
`

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [showBlurred, setShowBlurred] = useState(false)

  return (
    <>
      <BlurredBackground showBlurred={showBlurred} />
      <Root display={{ _: 'block', md: 'none' }}>
        <Flex {...styles.content} display="flex" alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <IconButton onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <CloseIcon /> : <MenuIcon />}</IconButton>
            <GravisLogo width="9.1rem" height="3.184rem" ml="2rem" />
          </Flex>
          <Apps setShowBlurred={(state) => setShowBlurred(state)} />
        </Flex>
      </Root>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} display={{ _: 'block', md: 'none' }} />
    </>
  )
}

const Header = () => {
  const [showBlurred, setShowBlurred] = useState(false)
  // const { isLoading, data: tokensInfo } = useGetTokensData()

  // const foundGRVXAmount =
  //   (tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === 'bsc').price +
  //     tokensInfo?.find((token) => token.symbol === 'GRVX' && token.chain === 'polygon').price) /
  //   2
  // const foundGRVSAmount = (tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === 'bsc') + tokensInfo?.find((token) => token.symbol === 'GRVS' && token.chain === 'polygon')) / 2
  return (
    <>
      <BlurredBackground showBlurred={showBlurred} />
      <Root display={{ _: 'none', md: 'block' }}>
        <Flex {...styles.content} alignItems="center">
          <StyledGravisLogo />
          <Flex justifyContent="space-between" alignItems="center" width="calc(100% - 10.8rem)">
            <Flex p="0 5.2rem" gridGap="2.55rem">
              <MenuItems ItemComponent={MenuItem} />
            </Flex>
            <Flex>
              <TokensContainer mr="5.1rem">
                {/* <TokenInfo */}
                {/*   logo={<GRVSFilledLogo />} */}
                {/*   title="GRVS" */}
                {/*   text={ */}
                {/*     <TokenText as="a" href={process.env.REACT_APP_PUBLIC_ROUND_URL} target="_blank"> */}
                {/*       Join Sale */}
                {/*     </TokenText> */}
                {/*   } */}
                {/* /> */}
                {/*  <TokenInfo*/}
                {/*    logo={<GRVXFilledLogo />}*/}
                {/*    title="GRVX"*/}
                {/*    text={*/}
                {/*      <TokenText*/}
                {/*        as="a"*/}
                {/*        href={`${process.env.REACT_APP_EXCHANGE_URL}/swap?network=56&inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&outputCurrency=0xa349fD455A457467D31cA8Db59052dAEBBBcc108`}*/}
                {/*        target="_blank"*/}
                {/*      >*/}
                {/*        {isLoading ? 'Loading...' : `$${foundGRVXAmount.toFixed(5)}`}*/}
                {/*      </TokenText>*/}
                {/*    }*/}
                {/*  />*/}
              </TokensContainer>
              <Apps setShowBlurred={(state) => setShowBlurred(state)} />
            </Flex>
          </Flex>
        </Flex>
      </Root>
      <MobileHeader />
    </>
  )
}

export default Header
