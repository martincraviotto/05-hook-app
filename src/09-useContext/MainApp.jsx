import { Navigate, Route, Routes } from "react-router-dom"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { AboutPage } from "./AboutPage"
import { Navbar } from "./Navbar"

export const MainApp = () => {
  return (
    <UserProvider>
        
        <Navbar />
        <hr />
        
        <Routes>
          <Route path="/" element= {<HomePage />}/>
          <Route path="login" element= {<LoginPage />}/>
          <Route path="about" element= {<AboutPage />}/>
          <Route path="/*" element= { <Navigate to="/about" />} /> 
          {/* {<Route path="/*" element= {<AboutPage />}/> } */}

        </Routes>
    </UserProvider>
  )
}
