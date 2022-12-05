'use client'
import React from "react";
import { AppProps } from "next/app";

function Error({Component, pageProps}: AppProps){
    return <Component {...pageProps} />
}

export default Error