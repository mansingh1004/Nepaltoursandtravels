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


const App=()=>{
  return(
    <>
    <BrowserRouter>
  
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

      <Route path="indianepalallpackages" element={<IndiaNepalallPackages/>}/>
      <Route path="nepalallpackages" element={<NepalAllPackages/>}/>
      <Route path="package/kathmandu" element={<Kathmandu/>}/>

      <Route path="visa" element={<VisaPage/>}/>

      <Route path="trekking-in-nepal" element={<TrekkingInNepal/>}/>
      <Route path="hiking-in-nepal" element={<HikingInNepal/>}/>
      <Route path="mountain-biking-In-Nepal" element={<MountainBikingInNepalPage/>}/>
      <Route path="nepal-bike-riding" element={<BikeTourInNepalPage/>}/>
      <Route path="package/ayodhya-kashi-varanasi-" element={<AyodhyaKashiDetails/>}/>
      <Route path="package/ayodhya-prayagraj" element={<AyodhyaPrayagraj/>}/>
      <Route path="package/ayodhya-lucknow" element={<AyodhyaLucknow/>}/>
      <Route path="package/ayodhya-chitrakoot" element={<AyodhyaChitrakoot/>}/>
      <Route path="package/ayodhya-nepal-sonauli-" element={<AyodhyaNepal/>}/>
      <Route path="package/ayodhya-gorakhpur" element={<AyodhyaGorakhpur/>}/>


     









      </Route>







    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
   
    
    
    </>
  )
}


export default App;