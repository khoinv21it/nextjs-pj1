
import React from "react";
import Head from "next/head";
import { Bangers } from "next/font/google";
// import Banner from "@/components/Layout/Banner";
import Header from "@/components/Layout/Header";
import Product from "@/components/Layout/Product";
import Banner from "@/components/Layout/Banner";
import Bannerv2 from "@/components/Layout/Bannerv2";

const Homepage = () => {
  return (
    <>
      <Head>
        <title>HOME SPORT STORE</title>
      </Head>
      <Header/>
      <Bannerv2/>
      <Product/>
     
    </>
  );
};

export default Homepage;
