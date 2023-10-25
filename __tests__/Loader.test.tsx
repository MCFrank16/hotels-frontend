import Navbar from '../components/Loader';
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe('renders the loader', () => {
    it('renders the loader', () => {
        render(<Navbar />);
        expect(screen.getByTestId("loader")).toBeInTheDocument();
        expect(screen.findAllByText("loading..."))
    })
});
