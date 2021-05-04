import React, { useState, useEffect } from 'react'
import * as NavbarStyles from './styled'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true)
  const router = useRouter()

  const changeNav = () => {
    if (window.scrollY < 40 && router.pathname === '/') {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener('scroll', changeNav)
    return () => window.removeEventListener('scroll', changeNav)
  }, [scrollNav, router])

  return (
    <NavbarStyles.Nav scrollNav={scrollNav}>
      <NavbarStyles.Container>
        <Link href="/">
          <NavbarStyles.LogoWrapper>
            <NavbarStyles.LogoImg src="./LogoTop.svg" alt="Logo Top" />
            <NavbarStyles.LogoText>
              <NavbarStyles.LogoOrange>ML </NavbarStyles.LogoOrange>Darbai
            </NavbarStyles.LogoText>
          </NavbarStyles.LogoWrapper>
        </Link>
        <NavbarStyles.MobileIcon onClick={toggle}>
          <FaBars />
        </NavbarStyles.MobileIcon>
        <NavbarStyles.Menu>
          <NavbarStyles.Item>
            <Link href="/">
              <NavbarStyles.LinkText>Pradžia</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/shop">
              <NavbarStyles.LinkText>Gaminiai</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/about">
              <NavbarStyles.LinkText>Galerija</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
          <NavbarStyles.Item>
            <Link href="/contact">
              <NavbarStyles.LinkText>Kontaktai</NavbarStyles.LinkText>
            </Link>
          </NavbarStyles.Item>
        </NavbarStyles.Menu>
      </NavbarStyles.Container>
    </NavbarStyles.Nav>
  )
}

export default Navbar
