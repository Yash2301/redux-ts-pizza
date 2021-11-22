import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";

export const renderWithRouter = (component) => {
	const history = createMemoryHistory()
	return {
		...render (
			<Router history={ history }>
				{ component }
			</Router>
		)
	}
}
