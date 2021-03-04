import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import ServicesSection from "../components/ServicesSection";

const Services = () => {
  return (
    <>
      <Head>
        <title>Focus - Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ServicesSection />
    </>
  );
};

export default Services;
