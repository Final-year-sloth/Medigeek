'use client';
/*Import the Image component from Next.js.*/
import Image from "next/image";

/*Import the Sidebar component from the components directory.*/
import Sidebar from "@/components/sidebar";
import LandingPage from "@/LandingPage/page";

/*The Home page component.*/
export default function Home() {
  /*Render the Home page content.*/
  return (
    /*The container element for the Home page.*/
    <div className="container">
      {/*Render the Sidebar component.*/}
      {/*<Sidebar/>*/}

      {/*Render the LandingPage component.*/}
      <LandingPage/>
    </div>
  );
}