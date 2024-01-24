import React from 'react';
import Layout from '../../components/Layouts/Layout';
import '../../styles/HomeStyle.css';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';


export default function Home() {
  return (
    <>
      <Layout>
        {/* home section hero banner */}
        <Section1 />

        {/* home section2 about section */}
        <Section2 />

        {/* home page er menu section section3 */}
        <Section3 />

        {/* home page er promotion section section4*/}
        <Section4 />

        {/* home page er shop section section5 */}
        <Section5 />

        {/*  home page er review section section6 */}
        <Section6 />

        {/* contact section */}
        <Section7 />

      </Layout>
    </>
  )
}