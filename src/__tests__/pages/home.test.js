import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { mockCart } from "../../__mocks__/db.mock";
import { renderWithRouterRedux } from "../../test-utils";
import Home from "../../pages/home.page";


describe("Home Page", () => {
	// it("should render with default props", () => {
	// 	renderWithRouterRedux(<Home />);
	//
	// 	screen.debug()
	// 	// expect(screen.getByText("Корзина пуста")).toBeInTheDocument();
	// 	// expect(screen.getByText('Вернуться назад').closest('a')).toHaveAttribute('href', '/')
	// });
	
	// describe("render with redux initialState", () => {
	// 	beforeEach(() => {
	// 		renderWithRouterRedux(
	// 			<Home />
	// 			,{
	// 				initialState: {
	// 					cart: {
	// 						...mockCart
	// 					}
	// 				}
	// 			}
	// 		);
	// 	});
	//
	// });
});
