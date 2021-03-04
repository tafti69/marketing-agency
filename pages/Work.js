import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const Work = () => {
  return (
    <>
      <Head>
        <title>Focus - Work</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="work">
        Hello from our works page. Here will be the projects that we made.
      </div>
    </>
  );
};

export default Work;
