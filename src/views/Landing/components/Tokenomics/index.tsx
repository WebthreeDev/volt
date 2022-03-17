import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex } from '@gravis.finance/uikit'
import DefaultText from '../../../../components/DefaultText'
import TokensSwitcher from '../TokensSwitcher'
import TokenomicInfo from '../TokenomicInfo'
import { TokenomicsTokenType } from '../../../../config/constants/types'
import TokenomicNetworksSwitcher from '../TokenomicNetworksSwitcher'

const Container = styled.div`
  //margin: 7rem 8rem;
  position: relative;
`

const TokenomicsInfoContainer = styled(Flex)<{ activeIndex: number }>`
  height: 55.5rem;
  > div:first-child {
    position: absolute;
    left: ${({ activeIndex }) => (activeIndex ? 'calc(-100% - 8rem)' : 0)};
    transition: left 500ms ease-in-out;
  }

  > div:last-child {
    position: absolute;
    right: ${({ activeIndex }) => (activeIndex ? 0 : 'calc(-100% - 8rem)')};
    transition: right 500ms ease-in-out;
  }
`

const Tokenomics = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeNetworkIndex, setActiveNetworkIndex] = useState(0)
  return (
    <Container>
      <Flex alignItems="center" justifyContent="center" flexDirection="column" mb="4rem">
        <Flex justifyContent="center" alignItems="center">
          <DefaultText fontWeight={700} fontSize="4.4rem" mr="2.5rem">
            Tokenomics
          </DefaultText>
          <TokensSwitcher activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </Flex>
        <Flex mt="2rem">
          <TokenomicNetworksSwitcher activeIndex={activeNetworkIndex} setActiveIndex={setActiveNetworkIndex} />
        </Flex>
      </Flex>
      <TokenomicsInfoContainer activeIndex={activeIndex}>
        <TokenomicInfo />
        <TokenomicInfo token={TokenomicsTokenType.GRVX} network={activeNetworkIndex === 0 ? 'bsc' : 'polygon'} />
      </TokenomicsInfoContainer>
    </Container>
  )
}

export default Tokenomics
