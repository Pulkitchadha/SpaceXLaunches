import React from 'react';
import { Provider } from "react-redux";
import store from "../store";

import 'assets/styles/index.css';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
}

export default App;
