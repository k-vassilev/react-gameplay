import { useState } from "react";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import CreateGame from "./components/CreateGame";
import EditGame from "./components/EditGame";
import Login from "./components/Login";
import Register from "./components/Register";
import ErrorPage from "./components/ErrorPage";

function App() {
	const [page, setPage] = useState('/home');

	const routes = {
		"/home": <WelcomeWorld />,
		"/games": <GameCatalog />,
		"/create-game": <CreateGame />,
		"/edit-game": <EditGame />,
		"/login": <Login />,
		"/register": <Register />,
	};

	const navigationChangeHandler = (path) => {
		setPage(path);
	};

	return (
		<div id="box">
			<Header navigationChangeHandler={navigationChangeHandler} />

			<main id="main-content">
				{ routes[page] || <ErrorPage />}
			</main>
		</div>
	);
}

export default App;
