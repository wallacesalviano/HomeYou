"use client"

import { Banner } from "./_components/Banner";
import { Budget } from "./_components/Budget";
import { Design } from "./_components/Design";
import { Footer } from "./_components/Footer";
import { Gallery } from "./_components/Gallery";
import { Nav } from "./_components/Nav";

const Page = () => {
  return(
    <div>
      <Nav />
      <Banner />
      <Design/>
      <Gallery />
      <Budget />
      <Footer/>
    </div>
  );
}

export default Page