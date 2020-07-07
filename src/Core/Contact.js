import React from 'react';
import Layout from './Layout';
import TextScroller from './TextScroller';


const ContactUs = () => {
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

export default ContactUs