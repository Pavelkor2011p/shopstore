import{render, screen} from '@testing-library/react';
import Main from '../Main';

describe('Main render', () => {
    it('should create Main with empty main', () => {
        const utils = render(<Main />);
        expect(utils).toMatchSnapshot();
    })
    it('list renders', ()=> {
        render(<Main />);
        const Element = screen.getAllByText(/Главная/i)
        expect(Element).toMatchSnapshot();
    
    })

    it('title renders', ()=> {
        render(<Main />);
        const Element = screen.getAllByText(/Косметика/i)
        expect(Element).toMatchSnapshot();
        
    })

    it('option renders', ()=> {
        render(<Main />);
        const Element = screen.getAllByText(/убыванию/i)
        expect(Element).toMatchSnapshot();
        
    })
})