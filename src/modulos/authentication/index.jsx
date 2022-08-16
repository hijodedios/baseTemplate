import Login from "./pages/Login.jsx";
import {BrowserRouter , Routes , Route , Navigate} from "react-router-dom";

const AuthenticationModule  = () => {
	return (
		<div className = "authenticate-module">
			<Routes>
				<Route index element = {<Navigate to = "login"/>} />
				<Route path = "login" element = {<Login />} / >
			</Routes>
			
		</div>
	)
}

export default AuthenticationModule;
