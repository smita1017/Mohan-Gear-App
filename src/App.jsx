import Navigation from './Pages/Navigation';
import Header from './Pages/Header';
import Card from './Pages/Card';
import Nature_of_Buisness from './assets/Nature_of_Buisness.png';
import Nature_of_Employee from './assets/Nature_of_Employee.png';
import Nature_of_turnover from './assets/Nature_of_turnover.png';

import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import img5 from './assets/img5.png';
import img6 from './assets/img6.png';
import img7 from './assets/img7.png';
import img8 from './assets/img8.png';
import img9 from './assets/img9.png';
import img10 from './assets/img10.png';
import Section4 from './Pages/section4';
import MachineParts from './Pages/MachineParts';
import Card2 from './Pages/Card2';
import connection1 from './assets/connection1.png';
import connection2 from './assets/connection2.png';
import connection3 from './assets/connection3.png';
import Awardingo from './Awardingo';
import Form1 from './Pages/Form1';
function App() {
  return (
    <>
      <Navigation />
      <Header />
      <div className="flex flex-wrap justify-center gap-6 p-6 ">
        <Card
          image={Nature_of_Buisness}
          title="Nature of Business"
          description1="Manufacturer, Exporter, Wholesaler"
          description2="Year of Establishment"
          description3="2004"
        />
        <Card
          image={Nature_of_Employee}
          title="Number of Employees"
          description1="Below 20"
          description2="CEO"
          description3="V. M. Talwalkar"
        />
        <Card
          image={Nature_of_turnover}
          title="GST No"
          description1="27AALPT2748K1Z1"
          description2="Annual Turnover"
          description3="₹0.5 to 2.5 Crore (Approx.)"
        />
      </div>
      <Section4 />
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
      <div className="flex flex-wrap justify-center gap-7 p-6">
      <Card2
      image={connection1}
      title="Infrastructure"
      discription="A 2,000 sq ft facility in Sangli, Maharashtra, with advanced gear manufacturing machinery (HMT, Sykes, LMW, Shimoga) produces 15,000 gears monthly, with strict quality control.Manufacturer, Exporter, Wholesaler"
      />
      <Card2
      image={connection2}
      title="Network"
      discription="Mukund Trans-Gears maintains a vast network across Indian markets and exports products to Austria, ensuring seamless business transactions and a global presence."
      />
      <Card2
      image={connection3}
      title="Clientele"
      discription="Recognized as a trusted firm, they have built a vast and loyal clientele over the years, reflecting their commitment to quality and service excellence."
      />
      </div>
      <div className="lg:max-w-7xl w-full flex items-center justify-center font-judson text-[#39615F] p-4">
  <p className="text-sm lg:text-2xl text-center mt-6">
    Mukund Trans-gear Honored with "Excellence in Indigenization - 
    <span className="text-red-400"> Make in India</span>" Award 2024
  </p>
</div>
<Awardingo />
<Form1 />
    </>
  );
}

export default App;
