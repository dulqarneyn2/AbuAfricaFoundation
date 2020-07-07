import React from 'react';
import Layout from './Layout';
import TextScroller from './TextScroller';
import Slider from './Slider';
import defaultSlides from '../Images/defaultSlides';

const Home = () => {
    return (
      <Layout
        title={
            <TextScroller text="PLEASE DONATE " />
        }
        className="container-fluid"
      >
        {/* <Slider slides={defaultSlides} /> */}
      </Layout>
    );
}

export default Home
