import Navbar from '../components/Navbar';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe('renders the navbar', () => {
    it('renders the navbar', () => {
        render(<Navbar />);
        expect(screen.getByTestId("navbar")).toBeInTheDocument();
        expect(screen.findAllByText("Hotels&Co."))
    })
})