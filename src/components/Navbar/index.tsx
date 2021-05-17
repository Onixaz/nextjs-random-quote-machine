import React, { useState, useEffect } from 'react'
import * as NavbarStyles from './styled'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useSWR from 'swr'

interface NavbarProps {
  toggle: () => void
}

const Navbar: React.FC<NavbarProps> = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true)
  const [categoriesOpen, setCategoriesOpen] = useState(false)
  const { data } = useSWR('https://mldarbai.paju.tech/wp-json/wp/v2/pages')

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

  if (!data) {
    return null
  }
  console.log(data)

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
          <NavbarStyles.Item
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <NavbarStyles.LinkText>Gaminiai</NavbarStyles.LinkText>
            <NavbarStyles.CategoryList show={categoriesOpen ? true : false}>
              {data.map((category: any) => {
                return (
                  <Link href={category.slug} key={category.id}>
                    <NavbarStyles.CategoryListText>
                      {category.title.rendered}
                    </NavbarStyles.CategoryListText>
                  </Link>
                )
              })}
            </NavbarStyles.CategoryList>
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
