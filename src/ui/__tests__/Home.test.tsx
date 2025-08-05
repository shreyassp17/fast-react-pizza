// import {render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
import Home from '../Home';
// import store from '../../store';
// import { MemoryRouter } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../../features/user/userSlice'
import cartReducer from '../../features/cart/cartSlice'
import { render, screen } from '../../test-utils';
import { AllTheProviders } from '../../test-utils';

test('renders static text', () => {
    render(<Home/>, {})
    const text = screen.getByText(/the best pizza/i)
    expect(text).toBeInTheDocument()
})

test('renders CreateUser component when username is empty', () => {
    // Ensure the initial state has username as ''
    render(<Home/>, {})
    // Check for a unique element/text from CreateUser
    expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('renders Button component when username is present', () => {
    // Create a custom store with username set
    const customStore = configureStore({
        reducer: combineReducers({
                user: userReducer,
                cart: cartReducer
            }),
        preloadedState: {
            user: {
                username: 'Shreyas',
                status: 'idle',
                position: {},
                address: '',
                error: ''
            }
        },
    });

    // render(
    //     <Provider store={customStore}>
    //         <MemoryRouter>
    //             <Home />
    //         </MemoryRouter>
    //     </Provider>
    // );

    render(<Home />, {store: customStore});


    // Check for the Button with username
    expect(screen.getByRole('link', { name: /continue ordering, shreyas/i })).toBeInTheDocument();
});