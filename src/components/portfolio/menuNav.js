import React from "react"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: table;
  width: 100%;
  height: 100%;

  max-width: 100%;
  margin-bottom: 20px;
`

const WrapperCell = styled.div`
  display: table-cell;
  vertical-align: middle;
`

const Logo = styled.div`
  font-size: 40px;
  color: #000000;
  text-transform: uppercase;
  padding-bottom: 60px;
  letter-spacing: 2px;
  line-height: 40px;
`

const MainMenu = styled.div`
  font-family: 'Lato', serif;
  letter-spacing: 1px;
  font-size: 18px;
  line-height: 24px;
`

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const SubMenuList = styled.ul`
  position: absolute;
  width: 200px;
  top: 0;
  left: 100%;
  font-size: 14px;
  text-align: left;
  visibility: hidden;
  padding-left: 20px;
  opacity: 0;
  list-style: none;
  padding: 0;
  margin: 0;
`

const Copyright = styled.div`
  padding-top: 50px;

  font-size: 12px;
  color: #ababab;
`

export default () => {

  const thisYear = new Date().getFullYear()

  return (
    <Wrapper>
      <WrapperCell>
        {/* <!-- Logo --> */}
        <Logo>
          <a href="index.html">
            Park<br />
            Haneul
          </a>
        </Logo>
        {/* <!-- End Logo --> */}

        {/* <!-- Navigation --> */}
        <MainMenu>
          <nav>
            <MenuList>
              <li class="active menu-item-has-children">
                <a href="index.html">All Projects</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
              <li>
                <a href="#">Web</a>
              </li>
              <li>
                <a href="#">Solo Projects</a>
              </li>
              <li>
                <a href="#">Resume</a>
                <a href="#">Print-Frendly Resume</a>
              </li>
              <li class="menu-item-has-children">
                <a href="blog.html">Blog</a>
                <SubMenuList>
                  <li>
                    <a href="about.html">About Me</a>
                  </li>
                  <li>
                    <a href="single.html">Single</a>
                  </li>
                  <li>
                    <a href="single-project.html">Project</a>
                  </li>
                  <li>
                    <a href="404.html">404 Page</a>
                  </li>
                </SubMenuList>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </MenuList>
          </nav>
        </MainMenu>
        {/* <!-- End Navigation --> */}

        {/* <!-- Socials --> */}
        <div class="socials">
          <a href="#" title="Behance">
            <i class="fa fa-behance"></i>
          </a>
          <a href="#" title="Dribbble">
            <i class="fa fa-dribbble"></i>
          </a>
          <a href="#" title="Facebook">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#" title="Google Plus">
            <i class="fa fa-google-plus"></i>
          </a>
          <a href="#" title="Instagram">
            <i class="fa fa-instagram"></i>
          </a>
          <a href="#" title="Search this site">
            <i class="fa fa-search"></i>
          </a>
        </div>
        <div class="box-search">
          <div class="table">
            <div class="table-cell">
              <div class="container">
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Socials --> */}

        <Copyright>
          <p>
            eeearl @ {thisYear}.
          </p>
        </Copyright>

      </WrapperCell>
    </Wrapper>
  )
}