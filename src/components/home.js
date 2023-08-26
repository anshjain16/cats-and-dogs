import styled from 'styled-components'
import '../styles.css'
import {useState} from 'react';
import sliderimg1 from './Group 2.png'


const RightSide = styled.div`
top: 0px;
left: 720px;
width: 720px;
height: 810px;
background: transparent 0% 0% no-repeat padding-box;
background-image: url(${props => props.toggle === 1 ? sliderimg1 : sliderimg1});
opacity: 1;
position: absolute;
`

function Home (){

    const [toggle, setToggle] = useState(1);
    console.log(sliderimg1);
    return <div className='Container'>
        <div className='logo'></div>
        <div className='leftHeading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        <div className='leftText'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <div className='AppStoreBadge'></div>
        <div className='GooglePlayBadge'></div>
        <div className='RightSide'></div>
        <RightSide toggle></RightSide>
        <div className='NavbarRight'>
            <a className='NavLink1'>About</a>
            <a className='NavLink2'>Careers</a>
            <a className='NavLink3'>Contact</a>
        </div>
        <div className='Righthead'>Type text</div>
        <div className='RightSubhead'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        <div className='social'>
            <div className='social-items1'></div>
            <div className='social-items2'></div>
            <div className='social-items3'></div>
        </div>
        <div className='b1' onClick={() => setToggle(!toggle)}></div>
        <div className='b2' onClick={() => setToggle(!toggle)}> </div>
        {/* <img src={sliderimg1}></img> */}
    </div>
}

export default Home;