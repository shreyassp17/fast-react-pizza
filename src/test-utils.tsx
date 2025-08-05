import React, { ReactElement } from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice'
import cartReducer from "./features/cart/cartSlice";

export const AllTheProviders = ({ children, store }) => {
    return (
        <Provider store={store}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </Provider>
    )
}

function customRender(
    ui,
    {
        initialState,
        store = configureStore({
            reducer: combineReducers({
                user: userReducer,
                cart: cartReducer
            }),
            preloadedState: initialState
        }),
        ...renderOptions
    },
) {
    function Wrapper({ children }) {
        return <Provider store={store}>
            <MemoryRouter>
                {children}
            </MemoryRouter>
        </Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react'
export { customRender as render }
