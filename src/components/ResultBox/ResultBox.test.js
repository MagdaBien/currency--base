import '@testing-library/jest-dom/extend-expect';
import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import { cleanup } from '@testing-library/react';


  describe('Component ResultBox', () => {

    it('should render without crashing', () => {
        render(<ResultBox from="PLN" to="USD" amount={100} />);
      }); 
      
    it('should render proper info about conversion when PLN -> USD', () => {

        // set test values to fields
        const testCases = [
            { from: 'PLN', to: 'USD', amount: '100', result: 'PLN 100.00 = $28.57' },
            { from: 'PLN', to: 'USD', amount: '1000', result: 'PLN 1,000.00 = $285.71' },
            { from: 'PLN', to: 'USD', amount: '10000', result: 'PLN 10,000.00 = $2,857.14' },  
            { from: 'PLN', to: 'USD', amount: '1', result: 'PLN 1.00 = $0.29' },      
            { from: 'PLN', to: 'USD', amount: '-500', result: 'Wrong value…' },                        
        ];        

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from={testObj.from} to={testObj.to} amount= {parseInt(testObj.amount)} />);    
            // find field elems and check
            const result = screen.getByTestId('resultField');
            expect(result).toHaveTextContent(testObj.result);
            // unmount component
            cleanup();
        }
      });  

      it('should render proper info about conversion when USD -> PLN', () => {

        // set test values to fields
        const testCases = [
            { from: 'USD', to: 'PLN', amount: '100', result: '$100.00 = PLN 350.00' },
            { from: 'USD', to: 'PLN', amount: '1000', result: '$1,000.00 = PLN 3,500.00' },
            { from: 'USD', to: 'PLN', amount: '10000', result: '$10,000.00 = PLN 35,000.00' },  
            { from: 'USD', to: 'PLN', amount: '1', result: '$1.00 = PLN 3.50' },  
            { from: 'USD', to: 'PLN', amount: '-500', result: 'Wrong value…' },                            
        ];        

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from={testObj.from} to={testObj.to} amount= {parseInt(testObj.amount)} />);    
            // find field elems and check
            const result = screen.getByTestId('resultField');
            expect(result).toHaveTextContent(testObj.result);
            // unmount component
            cleanup();
        }
      });   
      
      it('should render proper info about conversion when USD -> USD and PLN -> PLN', () => {

        // set test values to fields
        const testCases = [
            { from: 'USD', to: 'USD', amount: '200', result: '$200.00 = $200.00' },
            { from: 'USD', to: 'USD', amount: '2000', result: '$2,000.00 = $2,000.00' },
            { from: 'USD', to: 'USD', amount: '2', result: '$2.00 = $2.00' },
            { from: 'USD', to: 'USD', amount: '-2', result: 'Wrong value…' },
            { from: 'PLN', to: 'PLN', amount: '5', result: 'PLN 5.00 = PLN 5.00' },  
            { from: 'PLN', to: 'PLN', amount: '500', result: 'PLN 500.00 = PLN 500.00' }, 
            { from: 'PLN', to: 'PLN', amount: '-500', result: 'Wrong value…' },                          
        ];        

        for(const testObj of testCases) {
            // render component
            render(<ResultBox from={testObj.from} to={testObj.to} amount= {parseInt(testObj.amount)} />);    
            // find field elems and check
            const result = screen.getByTestId('resultField');
            expect(result).toHaveTextContent(testObj.result);
            // unmount component
            cleanup();
        }
      });   
      


});

