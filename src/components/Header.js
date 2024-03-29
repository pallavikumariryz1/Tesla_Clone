import React,{useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import {selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
function Header() {
   const [BurgerStatus, setBurgerStatus] = useState(false);
   const cars = useSelector(selectCars)
   

  return (
    <Container>
      <a>
       <img src="/images/logo.svg" alt=""/>
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
           <a key={index} href="#">{car}</a>
        ))}
      

      </Menu>
      <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Tesla Account</a>
     
          <CustomMenu onClick={()=> setBurgerStatus(true)}/>
       
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
      <CloseWrapper>
         <CustomClose onClick={()=> setBurgerStatus(false)}/>
      </CloseWrapper>
        {cars && cars.map((car,index)=>(
           <li key={index}><a href="#">{car}</a></li>
          
        ))}
          <li><a href="#">Model S</a></li>
          <li><a href="#">Model Y</a></li>
          <li><a href="#">Model 3</a></li>
          <li><a href="#">Model X</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">CyberTruck</a></li>
          <li><a href="#">Roadaster</a></li>
          
      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
`
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
      font-weight: 600;
      text-decoration: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;

  }

  
  @media(max-width: 768px){
      display: none;
  }
`
const RightMenu = styled.div`
   display:flex;

  a {
      font-weight: 600;
      text-decoration: uppercase;
     margin-right: 10px;

}

`
const CustomMenu = styled(MenuIcon)`
//<a href="https://icons8.com/icon/82749/menu">Menu icon by Icons8</a>
//<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/></svg>
//background-image: url('<img src="https://img.icons8.com/material-outlined/24/undefined/menu--v1.png"/>')
cursor: pointer;

`
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    text-align: start;
    flex-direction: column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s; 
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0, 0, 0, .2);
        a {
            font-weight: 600;
        }
        a:hover{
            background:rgb(173, 170, 170);
            color: #eff7f8;
            box-shadow: 0 0 10px white,0 0 40px white,0 0 80px rgba(245, 247, 189, 0.525);
            //box-shadow: 0 0 10px rgb(224, 224, 224),0 0 40px rgb(222, 219, 219),0 0 80px white;
            //box-shadow:0 0 10px #2d2f31,0 0 40px #2d2f31,0 0 80px #2d2f31;
        }
    }
    
`

const CustomClose = styled(ClearIcon)`
     cursor: pointer;
`
const CloseWrapper = styled.div`
     display: flex;
     justify-content: flex-end;
`