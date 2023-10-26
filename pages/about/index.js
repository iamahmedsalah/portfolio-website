import React, { useState } from 'react';






// Icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiBootstrap,
  SiExpress,
  SiGithub,
} from "react-icons/si";



//  Data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiBootstrap/>,
          <FaNodeJs/>,
          <SiExpress/>,
          <SiGithub/>,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Google Attendee I/O - Badge',
        stage: '2022 - 2023',
      },
      {
        title: 'Google Clould Innovator - Badge',
        stage: '2021 - 2022',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer & Web Development - Div Marketing Solution Agency',
        stage: '2022 - 2023',
      },
      {
        title: 'Front-End Development - Freelancer ',
        stage: '2021 - 2023',
      },
      {
        title: 'Intern - CIB Egypt',
        stage: '2021 - 2022',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Professional Front-End Web Development Nanodegree - Egfwd & Udacity',
        stage: ' February 18,2022',
      },
      {
        title: 'MIS - Alexandria University Bachelor degree',
        stage: '2020 - 2023',
      },
      {
        title: 'Certified IT Support - Google',
        stage: 'February 8,2023',
      },
    ],
  },
];


// Components
import Avatar from '../../components/Avatar';
import Circle from '../../components/Circles';


// Framer motion
import {motion} from 'framer-motion' ;
import {fadeIn} from '../../variants' ;


// Counter
import CountUp from 'react-countup'


const About = () => {
  const [index, setIndex] = useState(0);
  // console.log(index);
  return (
  <div className=' h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circle/>
    {/* Avatar image */}
    <motion.div 
    variants={fadeIn('right' ,0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className=' hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar/>
    </motion.div>
    <div className=' container mx-auto h-full flex flex-col items-center xl:flex-row
    gap-x-6  '>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 
        variants={fadeIn('right' ,0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='h2'> Captivating <span className='text-amber-500'>stories</span> birth magnificent design.</motion.h2>
        <motion.p
        variants={fadeIn('right' ,0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className=' max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'> 2 years ago, I began freelancing as a front-end developer. since then, I've done
          remote work for Agencies, counsulted for others and startups, and collaborated on digital products
          for business and consumer use.
        </motion.p>
        {/* counter */}
        <motion.div
        variants={fadeIn('up' ,0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className=' flex-1 xl:gap-x-6 hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
          <div>
            <div className=' relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute
            after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold mb-2 mx-5 text-amber-500'>
                <CountUp start={0} end={3} duration={5}/> +
              </div>
              <div className=' text-xs mx-5 it uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>
                Years of experience
              </div>
            </div>
          </div>
          {/* project */}
          <div>
            <div className=' relative flex-1after:w-[1px] after:h-full after:bg-white/10 after:absolute
            after:top-0 after:right-0'>
              <div className='text-2xl xl:text-4xl font-extrabold mb-2 mx-5 text-amber-500'>
                <CountUp start={0} end={10} duration={5}/> +
              </div>
              <div className=' text-xs mx-5 uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                Finshed Project
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* info */}
      <motion.div 
      variants={fadeIn('left' ,0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex flex-col w-full xl:max-w-[48%] h-[388px]' >
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 '>
          {aboutData.map((item ,itemIndex) =>{
            return <div key={itemIndex} 
            className=
            {`${index === itemIndex && 'text-amber-500 after:w-[100%] after:bg-amber-500 after:transition-all after:duration-300'}
            cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
            onClick={()=> setIndex(itemIndex)}>
              {item.title}</div>
          })}
        </div>
        <div className='  py-2 xl:py-6 flex flex-col gap-y-1 xl:gap-y-2
        items-center xl:items-start' >{
          aboutData[index].info.map((item, itemIndex)=>{
            return (
            <div key={itemIndex} className='flex-1 flex-col max-w-max gap-x-2 items-center text-white/60'>
                {/* title */}
                <div className=' text-white' >{item.title}</div> 
                <div>{item.stage}</div>
                <div className='flex gap-x-4 py-2'>
                {/* Icons */}
                {item.icons?.map((icon, itemIndex)=>{
                  return <div className=' text-2xl' key={itemIndex}>{icon}</div>
                })}
                </div>
            </div>
            );
          })}
          </div>
      </motion.div>
    </div>
  </div>);
};

export default About;
