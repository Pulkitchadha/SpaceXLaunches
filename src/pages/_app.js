import React from 'react';
import { Provider } from "react-redux";
import store from "../store";
import SiteLayout from "../layouts/SiteLayout";

import 'assets/styles/index.css';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
        </Provider>
    );
}

export default App;
