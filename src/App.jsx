import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom"
import HomeModule from "./modulos/home/index.jsx";
import AuthenticationModule  from "./modulos/authentication/index.jsx";
import AdminModule from "./modulos/admin/index.jsx";
import RecepcionistaModule from "./modulos/admin/index.jsx";
			
function App() {
  return (
    <div className="App">
	<BrowserRouter>
		<Routes>
			<Route path = "/" element = {<Navigate to="/landing-page"/>} />
			<Route path="/landing-page/*" element = {<HomeModule />} />
			<Route path="/authentication/*" element={<AuthenticationModule />} />
		</Routes>
	</BrowserRouter>
    </div>
  )
}

export default App
