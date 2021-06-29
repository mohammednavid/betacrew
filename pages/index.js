import Head from "next/head";
import HomePage from "./home";
import tawkTo from "tawkto-react";
import {useEffect} from 'react'

export default function Home() {

const tawkToPropertyId = '60da1d3065b7290ac6385ccb';

// Direct Chat Link
// https://tawk.to/chat/tawkToPropertyId/tawkToKey

const tawkToKey = '5083d80916876cd81bc461d75c2ad17c100ad2f6';

useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey)
}, [])

return (
    <>
      <Head>
        <title>Betacrew</title>
        <meta
          name="description"
          content="Betacrerw - A team of developers for your organisation"
        />
      </Head>
      <HomePage />
    </>
  )
};
