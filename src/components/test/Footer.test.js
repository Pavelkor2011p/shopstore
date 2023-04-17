import{render, screen} from '@testing-library/react';
import Footer from '../Footer';



describe('Footer render', () => { 
    it('should create Footer with empty footer', () => {
        const utils = render(<Footer />);
        expect(utils).toMatchSnapshot();
    });

    it('list render', () => {
        render(<Footer />);

        expect(screen.getAllByRole('list')).toMatchSnapshot();
    })
 });