import { Routes , Route , Navigate} from "react-router-dom"
import Home from "./pages/home.jsx"

const HomeModule = () => {
	return <div className = "content-home-module">
		<Routes >
			<Route index element={<Navigate to="home"/>}  />
			<Route path = "home" element = {<Home/>}  />
		</Routes >
	</div>
}

export default HomeModule
