
import React from "react";
import Head from "next/head";
import { Bangers } from "next/font/google";
import Banner from "@/components/Layout/Banner";
import Header from "@/components/Layout/Header";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>HOME SPORT STORE</title>
      </Head>
      <Header/>
      <Banner/> 
    </>
  );
};

export default Homepage;
