import React from 'react';
import '../assets/styles/index.css';

function App({ Component, pageProps }) {
    return (
        <Component {...pageProps} />
    );
}

export default App;