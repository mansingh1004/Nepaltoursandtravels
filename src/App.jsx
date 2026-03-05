import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import IndiaNepalallPackages from "./pages/IndiaNepalallPackages"
import NepalAllPackages from "./nepalpackages/NepalAllPackages"


import AyodhyaPackages from "./pages/AyodhyaPackages"
import KathmanduTour2N3D from "./pages/KathmanduTour2N3D"
import KashiTourPackages from "./pages/KashiTourPackages"
import BhutanTourPackages from "./pages/BhutanTourPackages"
import PrayagrajTourPackages from "./pages/PrayagrajTourPackages"
import BodhGayaTourPackages from "./pages/BodhGayaTourPackages"
import GorakhpurTourPackages from "./pages/GorakhpurTourPackages"
import SchoolTripNepal from "./pages/school-trip-nepal"
import ParaglidingNepal from "./pages/paragliding-nepal"
import MountainFlightNepal from "./pages/mountain-flight-nepal"
import MountainHelicopterNepal from "./pages/mountain-helicopter-tour-nepal"
import BungeeJumpingNepal from "./pages/bungee-jumping-nepal"


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

     









      </Route>







    </Routes>
    
    
    
    
    
    
    </BrowserRouter>
    
   
    
    
    </>
  )
}


export default App;