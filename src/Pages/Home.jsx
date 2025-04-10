import Navigation from './Navigation';
import Header from './Header';
import Card from './Card';
import Nature_of_Buisness from '../assets/Nature_of_Buisness.png';
import Nature_of_Employee from '../assets/Nature_of_Employee.png';
import Nature_of_turnover from '../assets/Nature_of_turnover.png';

import Section4 from './section4';
import MachineParts from './MachineParts';
import Card2 from './Card2';
import connection1 from '../assets/connection1.png';
import connection2 from '../assets/connection2.png';
import connection3 from '../assets/connection3.png';
import Awardingo from './Awardingo';
import Form1 from './Form1';
import AboutUssection from './AboutUssection';
import Footer from './Footer';
import Productitems from './Productitems';
function Home() {
  return (
    <>
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
     <Productitems/>
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
<div className='flex items-center justify-center'>
<Form1 />
</div>
<AboutUssection/> 

    </>
  );
}

export default Home;
