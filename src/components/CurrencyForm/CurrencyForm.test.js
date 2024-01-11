import { render, screen } from '@testing-library/react';
import CurrencyForm from './CurrencyForm';
import userEvent from '@testing-library/user-event';
import { cleanup } from '@testing-library/react';


describe('Component CurrencyForm', () => {
  it('should render without crashing', () => {
    render(<CurrencyForm action={() => {}} />);
  });

  it('should run action callback with proper data on form submit', () => {

    // set test values to fields
    const testCases = [
        { amount: '100', from: 'PLN', to: 'USD' },
        { amount: '200', from: 'USD', to: 'PLN' },
        { amount: '200', from: 'PLN', to: 'USD' },
        { amount: '345', from: 'USD', to: 'PLN' },
    ];
  
    for(const testObj of testCases) {
        const action = jest.fn();

        // render component
        render(<CurrencyForm action={action} />);    
    
        // find “convert” button
        const submitButton = screen.getByText('Convert');    
        
        // find field elems
        const amount = screen.getByTestId('amountField');
        const from = screen.getByTestId('fromField');
        const to = screen.getByTestId('toField');

        userEvent.type(amount, testObj.amount);
        userEvent.selectOptions(from, testObj.from);
        userEvent.selectOptions(to, testObj.to);

        // simulate user click on "convert" button
        userEvent.click(submitButton);

        // check if action callback was called once and with proper argument
        expect(action).toHaveBeenCalledTimes(1);
        expect(action).toHaveBeenCalledWith({ amount: parseInt(testObj.amount), from: testObj.from, to: testObj.to }); 
        
        // unmount component
        cleanup();
    }





  });

});