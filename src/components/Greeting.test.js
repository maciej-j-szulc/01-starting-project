import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

describe('Greeting component', () => {
    test('renders Hello World', () => {
        //Arrange
        render(<Greeting/>);
    
        //Act
        //...nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders It's good to see you! if the button was NOT clicked", () => {
        render(<Greeting/>);

        const goodToSee = screen.getByText("It's good to see you!", {exact: false});

        expect(goodToSee).toBeInTheDocument();
    })

    test("renders 'Changed!' if the button was clicked", () => {
        //Arrange
        render(<Greeting/>);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)
        //Assert
        const output = screen.getByText("Changed!", {exact: false});
        expect(output).toBeInTheDocument();

    });

    test("doesn't render It's good to see you! if the button was clicked", () => {
        render(<Greeting/>);

        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement)

        const output = screen.queryByText("It's good to see you!", {exact: false});
        expect(output).toBeNull();
    });
});

