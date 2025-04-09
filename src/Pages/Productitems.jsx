import React from 'react'
import MachineParts from './MachineParts'

import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
const Productitems = () => {
  return (
    <div className="flex flex-wrap justify-center gap-7 ">
    <MachineParts
      img={img1}
      title="Industrial Sprockets"
      description ="High-quality sprockets for industrial applications."
      Clickname="View More"
     />
      <MachineParts
      img={img2}
      title="Planetary Gearbox"
      description="Precision-engineered gearboxes for smooth power transmission."
      Clickname="View More"
     />
     <MachineParts
      img={img3}
      title="Harmonic Drives"
      description="Reliable drives designed for accuracy and efficiency.."
      Clickname="View More"
     />
     
     <MachineParts
      img={img4}
      title="Worm Gearbox"
      description="Durable and high-performance worm gear solutions.."
      Clickname="View More"
     />
      <MachineParts
      img={img5}
      title="Bevel Planetary Drives"
      description="High-torque drives with advanced design."
      Clickname="View More"
     />
     
      <MachineParts
      img={img6}
      title="Charging Pump"
      description="Sturdy and efficient pumps for various industrial uses."
      Clickname="View More"
     />
      <MachineParts
      img={img7}
      title="Helical Gears"
      description="High-speed gears with excellent load capacity."
      Clickname="View More"
     />
      
      <MachineParts
      img={img8}
      title="Aluminium Timing Pulleys"
      description="Lightweight, durable pulleys for smooth motion control."
      Clickname="View More"
     />
      <MachineParts
      img={img9}
      title="Track Drives"
      description="Robust track drives for superior performance."
      Clickname="View More"
     />
      <MachineParts
      img={img10}
      title="Winch Drives"
      description="Efficient winch drives for heavy-duty applications."
      Clickname="View More"
     />
    </div>
  )
}

export default Productitems