import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import IndiaNepalallPackages from "./pages/IndiaNepalallPackages"
import NepalAllPackages from "./nepalpackages/NepalAllPackages"
import Kathmandu from "./nepalpackages/Kathmandu"


import VisaPage from "./pages/VisaPage"



import AyodhyaPackages from "./ayodhyapackages/AyodhyaPackages"

import KathmanduTour2N3D from "./pages/KathmanduTour2N3D"
import KashiTourPackages from "./kashipackages/KashiTourPackages"
import BhutanTourPackages from "./bhutanpackages/BhutanTourPackages"
import PrayagrajTourPackages from "./PrayagrajPackages/PrayagrajTourPackages"
import BodhGayaTourPackages from "./bodhgayapackages/BodhGayaTourPackages"
import GorakhpurTourPackages from "./gorakhpurpackages/GorakhpurTourPackages"
import SchoolTripNepal from "./schooltrippackage/school-trip-nepal"
import ParaglidingNepal from "./adventuresports/paragliding-nepal"
import MountainFlightNepal from "./adventuresports/mountain-flight-nepal"
import MountainHelicopterNepal from "./adventuresports/mountain-helicopter-tour-nepal"
import BungeeJumpingNepal from "./adventuresports/bungee-jumping-nepal"
import TrekkingInNepal from "./adventuresports/trekking-in-nepal"
import HikingInNepal from "./adventuresports/hiking-in-nepal"
import MountainBikingInNepalPage from "./adventuresports/mountain-biking-In-Nepal"
import BikeTourInNepalPage from "./adventuresports/nepal-bike-riding"
import AyodhyaKashiDetails from "./ayodhyapackages/ayodhya-kashi-varanasi-"
import AyodhyaPrayagraj from "./ayodhyapackages/ayodhya-prayagraj"
import AyodhyaLucknow from "./ayodhyapackages/ayodhya-lucknow"
import AyodhyaChitrakoot from "./ayodhyapackages/ayodhya-chitrakoot"
import AyodhyaNepal from "./ayodhyapackages/ayodhya-nepal-sonauli-"
import AyodhyaGorakhpur from "./ayodhyapackages/ayodhya-gorakhpur"

import KashiAyodhyaTour from "./kashipackages/kashi-ayodhya-tour"
import KashiPrayagrajTour from "./kashipackages/kashi-prayagraj-tour"
import KashiGorakhpurTour from "./kashipackages/kashi-gorakhpur-tour"
import KashiLucknowTour from "./kashipackages/kashi-lucknow-tour"
import KashiChitrakootTour from "./kashipackages/kashi-chitrakoot-tour"
import KashiNepalTour from "./kashipackages/kashi-nepal-border"


import Pokhara from "./nepalpackages/Pokhara"
import Chitwan from "./nepalpackages/Chitwan"
import Annapurna from "./nepalpackages/Annapurna";
import Lumbini from "./nepalpackages/Lumbini"
import Mustang from "./nepalpackages/Mustang";
import Nagarkot from "./nepalpackages/Nagarkot";
import  BaseCamp from "./nepalpackages/BaseCamp";

import Varanasi from "./bodhgayapackages/Varanasi"
import BodhgayaRajgir from "./bodhgayapackages/Bodhgya-Rajgir"
import BodhgyaNalanda from "./bodhgayapackages/BodhgyaNalanda"
import BodhgyaToPatna from "./bodhgayapackages/BodggyaToPatna";
import BodhgyaToKhushinagar from "./bodhgayapackages/BodhgyaToKhushinagar"
import BodhgyaToLumbini from "./bodhgayapackages/BodhgyaToLumbini"

import PrayagrajAyodhyaTour from "./PrayagrajPackages/prayagraj-ayodhya"
import PrayagrajKashiTour from "./PrayagrajPackages/prayagraj-kashi"
import PrayagrajChitrakootTour from "./PrayagrajPackages/prayagraj-chitrakoot"
import PrayagrajGorakhpurTour from "./PrayagrajPackages/prayagraj-gorakhpur"
import PrayagrajNepalTour from "./PrayagrajPackages/prayagraj-nepal-border"
import PrayagrajLucknowTour from "./PrayagrajPackages/prayagraj-lucknow"


import  GorakhpurToKashi from "./gorakhpurpackages/GorakhpurTokashi"
import GorakhpurToAyodhya from "./gorakhpurpackages/GorakhpurToAyodhya" 
import GorakhpurToKhushinagar from "./gorakhpurpackages/GorakhpurToKushinagar";
import GorakhpurToNepalBoder from "./gorakhpurpackages/GorakhpurToNepalBorder";
import GorakhpurToPrayagraj from "./gorakhpurpackages/GorakhpurToPrayagraj"
import GorakhpurToLucknow from "./gorakhpurpackages/GorakhpurToLucknow"

// school Trip Packages 
import GorakhpurToLumbini from "./schooltrippackage/GorakhpurToLumbini";
import GorakhpurToBalmikiNagar from "./schooltrippackage/GorakhpurToBalmikiNagar"
import GorakhpurToKushinagar from "./schooltrippackage/GorakhpurToKushinagar";
import GorakhpurToKAyodhya from "./schooltrippackage/GorakhpurToAyodhya"

import ParoTaktsangTour from "./bhutanpackages/paro-taktsang-experience"
import PunakhaHeritageTour from "./bhutanpackages/punakha-heritage-tour"
import ThimphuCapitalTour from "./bhutanpackages/thimphu-capital-heart"
import PhobjikhaValleyTour from "./bhutanpackages/phobjikha-scenic-valley"

import  ScrollToTop from "./pages/ScrollToTop";
import Flight from "./pages/Flight"


import HotelBookingNepal from "./pages/hotels"
import CabService from "./Services/CabService"

import CurrencyExchangeNepal from "./pages/currency-exchange"
import NepalSimCard from "./pages/sim-card"


const App=()=>{
  return(
    <>
    <BrowserRouter>
   <ScrollToTop />
    <Routes>
      <Route path="/" element={<Layout/>} >

      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>

      
      <Route path="ayodhya-packages" element={<AyodhyaPackages/>}/>
      <Route path="kathmandu-tour-2n3d" element={<KathmanduTour2N3D/>}/>
      <Route path="kashi-tour-packages" element={<KashiTourPackages/>}/>
      <Route  path="bhutan-tour-packages" element={<BhutanTourPackages/>}/>
      <Route path="prayagraj-tour-packages" element={<PrayagrajTourPackages/>}/>
      <Route path="bodhGaya-tour-packages" element={<BodhGayaTourPackages/>}/>
      <Route path="gorakhpur-tour-packages" element={<GorakhpurTourPackages/>}/>
      <Route path="school-trip-nepal" element={<SchoolTripNepal/>}/>
      <Route path="paragliding-nepal" element={<ParaglidingNepal/>}/>
      <Route path="mountain-flight-nepal" element={<MountainFlightNepal/>}/>
      <Route path="mountain-helicopter-tour-nepal" element={<MountainHelicopterNepal/>}/>
      <Route path="bungee-jumping-nepal" element={<BungeeJumpingNepal/>}/>
                    {/*   Nepal packages */}
      <Route path="indianepalallpackages" element={<IndiaNepalallPackages/>}/>
      <Route path="nepalallpackages" element={<NepalAllPackages/>}/>
      <Route path="package/kathmandu" element={<Kathmandu/>}/>
      <Route path="package/pokhara"  element={<Pokhara/>}/>
      <Route path="package/chitwan" element={<Chitwan/>}/>
      <Route path="package/annapurna"  element={<Annapurna/>}/>
      <Route path="package/lumbini"  element={<Lumbini/>}/>
      <Route path="package/mustang"  element={<Mustang/>}/>
      <Route path="package/nagarkot" element={<Nagarkot/>}/>
      <Route path="package/basecamp" element={<BaseCamp/>}/>

      <Route path="visa" element={<VisaPage/>}/>

      <Route path="trekking-in-nepal" element={<TrekkingInNepal/>}/>
      <Route path="hiking-in-nepal" element={<HikingInNepal/>}/>
      <Route path="mountain-biking-In-Nepal" element={<MountainBikingInNepalPage/>}/>
      <Route path="nepal-bike-riding" element={<BikeTourInNepalPage/>}/>
                        {/* Ayodhya packages */}
      <Route path="package/ayodhya-kashi-varanasi-" element={<AyodhyaKashiDetails/>}/>
      <Route path="package/ayodhya-prayagraj" element={<AyodhyaPrayagraj/>}/>
      <Route path="package/ayodhya-lucknow" element={<AyodhyaLucknow/>}/>
      <Route path="package/ayodhya-chitrakoot" element={<AyodhyaChitrakoot/>}/>
      <Route path="package/ayodhya-nepal-sonauli-" element={<AyodhyaNepal/>}/>
      <Route path="package/ayodhya-gorakhpur" element={<AyodhyaGorakhpur/>}/>
                         {/* Kashi Packages  */}
      <Route path="package/kashi-ayodhya-tour" element={<KashiAyodhyaTour/>}/>
      <Route path="package/kashi-prayagraj-tour" element={<KashiPrayagrajTour/>}/>
      <Route path="package/kashi-gorakhpur-tour" element={<KashiGorakhpurTour/>}/>
      <Route path="package/kashi-lucknow-tour" element={<KashiLucknowTour/>}/>
      <Route path="package/kashi-chitrakoot-tour" element={<KashiChitrakootTour/>}/>
      <Route path="package/kashi-nepal-border" element={<KashiNepalTour/>}/>
                          {/* Prayagraj packages */}
      <Route path="package/prayagraj-ayodhya" element={<PrayagrajAyodhyaTour/>}/> 
      <Route path="package/prayagraj-kashi" element={<PrayagrajKashiTour/>}/> 
      <Route path="package/prayagraj-chitrakoot" element={<PrayagrajChitrakootTour/>}/> 
      <Route path="package/prayagraj-gorakhpur" element={<PrayagrajGorakhpurTour/>}/> 
      <Route path="package/prayagraj-nepal-border" element={<PrayagrajNepalTour/>}/>
      <Route path="package/prayagraj-lucknow" element={<PrayagrajLucknowTour/>}/>              

      {/* Bodhgayapackages */}
      <Route path="package/bodhgaya-varanasi" element={<Varanasi/>}/>
      <Route path="package/rajgir" element={<BodhgayaRajgir/>}/>
 <Route path="package/bodhgaya-nalanda" element={<BodhgyaNalanda/>}/>
 <Route path="package/bodhgaya-patna" element={<BodhgyaToPatna/>}/>   
  <Route path="package/bodhgaya-khushinagar" element={<BodhgyaToKhushinagar/>}/>     
    <Route path="package/bodhgaya-lumbini" element={<BodhgyaToLumbini/>}/> 

        {/* Gorakhpur Packages */}

        <Route path="package/gorakhpur-kashi" element={<GorakhpurToKashi/>}/> 
        <Route path="package/gorakhpur-ayodhya" element={<GorakhpurToAyodhya/>}/> 
         <Route path="package/gorakhpur-khushinagar" element={<GorakhpurToKhushinagar/>}/> 
         <Route path="package/gorakhpur-nepalborder" element={<GorakhpurToNepalBoder/>}/> 
          <Route path="package/gorakhpur-prayagraj" element={<GorakhpurToPrayagraj/>}/> 
            <Route path="package/gorakhpur-lucknow" element={<GorakhpurToLucknow/>}/> 


{/* School Trip Packages  */}
<Route path="package/gorakhpur-lumbini" element={<GorakhpurToLumbini/>}/> 
<Route path="package/balmikinagar" element={<GorakhpurToBalmikiNagar/>}/> 
<Route path="package/kushinagar" element={<GorakhpurToKushinagar/>}/>
<Route path="package/ayodhya" element={<GorakhpurToKAyodhya/>}/>

         {/* Bhutan packages */}

         <Route path="package/paro-taktsang-experience" element={<ParoTaktsangTour/>}/>
         <Route path="package/punakha-heritage-tour" element={<PunakhaHeritageTour/>}/>
         <Route path="package/thimphu-capital-heart" element={<ThimphuCapitalTour/>}/>
         <Route path="package/phobjikha-scenic-valley" element={<PhobjikhaValleyTour/>}/>

         <Route path="hotels" element={<HotelBookingNepal/>}/>
         <Route path="flight" element={<Flight/>}/>

        <Route path="services/currency-exchange" element={<CurrencyExchangeNepal/>}/> 
        <Route path="services/sim-card" element={<NepalSimCard/>}/>
        

<Route path="cabservice" element={<CabService/>}/>





      </Route>







    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
   
    
    
    </>
  )
}


export default App;