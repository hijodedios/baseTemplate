import { Outlet } from "react-router-dom"

const Layout = () => {
	return <div className="layout">
		<header>im a heaedr</header>
		<main>
			<Outlet />
		</main>
		<footer>footer</footer>
	</div>
}

export default Layout
