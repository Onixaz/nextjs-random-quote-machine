import React from 'react'
import * as HeroStyles from './styled'
import { Link as LinkS } from 'react-scroll'

const Hero = () => {
  return (
    <>
      <HeroStyles.UpperContainer>
        <HeroStyles.Bg>
          <HeroStyles.Image src="./woodworking-bg.jpg" alt="ML darbai" />
        </HeroStyles.Bg>
        <HeroStyles.Content>
          <HeroStyles.BigLogo src="./logo.svg" alt="ML darbai" />
          <HeroStyles.H1>Įvairūs rankų darbo gaminiai.</HeroStyles.H1>

          <HeroStyles.P>Pagal individualius užsakymus. Iš medienos, bei metalo. </HeroStyles.P>

          <HeroStyles.ScrollDownIconWrapper>
            <LinkS to="featured" smooth={true} duration={500}>
              <HeroStyles.IconHolder>
                <HeroStyles.IconDown />
              </HeroStyles.IconHolder>
            </LinkS>
          </HeroStyles.ScrollDownIconWrapper>
        </HeroStyles.Content>
      </HeroStyles.UpperContainer>

      <HeroStyles.BottomContainer>
        <HeroStyles.BottomIconWrapper>
          <HeroStyles.BottomIcon src="./kokybe.svg" alt="Darbų kokybė" />
          <HeroStyles.BottomIcon src="./kokybe.svg" alt="Darbų kokybė" />
          <HeroStyles.BottomIcon src="./kokybe.svg" alt="Darbų kokybė" />
          <HeroStyles.BottomIcon src="./kokybe.svg" alt="Darbų kokybė" />
        </HeroStyles.BottomIconWrapper>
      </HeroStyles.BottomContainer>
    </>
  )
}

export default Hero
