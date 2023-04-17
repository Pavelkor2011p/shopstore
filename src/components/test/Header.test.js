
import{render, screen} from '@testing-library/react';
import Header from "../Header";

describe('Header', () => {
    it('should create Header with empty header', () => {
        const utils = render(<Header />);

        expect(utils).toMatchSnapshot();
    });

    it('list renders', ()=> {
        render(<Header />);
        const Element = screen.getAllByText(/оплата/i)

        expect(Element).toMatchSnapshot();
    })

    it('list render', ()=> {
        render(<Header />);
        const Elements = screen.getAllByText(/компании/i)
        expect(Elements).toMatchSnapshot();
    })

    it('title render', ()=> {
        render(<Header />);
        const Elements = screen.getAllByText(/Кокчетав/i)
        expect(Elements).toMatchSnapshot();
    })
})