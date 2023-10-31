import React from 'react'
import {FaCapsules,FaIndustry,FaScrewdriver,FaDragon,FaShip,} from 'react-icons/fa'
import {GrLaunch} from 'react-icons/gr'
import {GiMissileLauncher} from 'react-icons/gi'
import {SiPayloadcms} from 'react-icons/si'
import {RiRoadsterFill} from 'react-icons/ri'
import {BsStars} from 'react-icons/bs'
import {BiMobileLandscape} from 'react-icons/bi'
import {FiLink2} from 'react-icons/fi'
import SpaceXIntroPic from '../assets/Media/SpaeX-Intro.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {
   let Menu = [
    {
        Name: 'Capsules',
        to: '/capsules',
        icon: <FaCapsules />
    },
    {
        Name: 'Company info',
        to: '/company',
        icon: <FaIndustry />
    },
    {
        Name: 'Cores',
        to: '/cores',
        icon: <FiLink2 />
    },
    {
        Name: 'Crew',
        to: '/crew',
        icon: <FaScrewdriver />
    },
    {
        Name: 'Dragons',
        to: '/dragons',
        icon: <FaDragon />
    },
    {
        Name: 'Landpads',
        to: '/landpads',
        icon: <BiMobileLandscape />
    },
    {
        Name: 'Launches',
        to: '/launches',
        icon: <GrLaunch />
    },
    {
        Name: 'Launchpads',
        to: '/launchpads',
        icon: <GiMissileLauncher />
    },
    {
        Name: 'Payloads',
        to: '/payloads',
        icon: <SiPayloadcms />
    },
    {
        Name: 'Roadster Info',
        to: '/roadster',
        icon: <RiRoadsterFill />
    },
    {
        Name: 'Rockets',
        to: '/rockets',
        icon: <GrLaunch />
    },
    {
        Name: 'Ships',
        to: '/ships',
        icon: <FaShip />
    },
    {
        Name: 'Star Link',
        to: '/starlink',
        icon: <BsStars />
    },
   ];
  return (
    <>
      <div className="container"  data-bs-theme="dark">
        <div className="row">
            <div className="col-lg-6 pt-3 pt-5">
                <h3 title='SpaceX Api Test.....'>SPACEX API...</h3>
                 {Menu.map((value) => (
                 <div className="unoderlist ps-2" key={value.Name}>
                  <Link to={value.to} title='Click now for more information about SpaceX APIs' className='nav-link'>{value.icon} {value.Name} </Link>
                 </div>
                  ))}
            </div>
            <div className="col-lg-6">
               <div className='p-5 ps-1 pb-5 float-lg-end'>
                <img className='d-block home-page-image rounded-4' title='SpaceX APIs' src={SpaceXIntroPic} alt="SpaceXIntroPic" />
               </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
