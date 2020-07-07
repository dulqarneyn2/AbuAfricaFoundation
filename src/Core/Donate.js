import React, { Fragment } from 'react';
import Layout from './Layout';
import TextScroller from './TextScroller';
import '../Styles/style.css'
const Donate = () => {
    return (
      <Fragment>
        <Layout
          // title={<TextScroller text="PLEASE DONATE " />}
        className="container-fluid">
    
      </Layout>
      {/* donation */}
      <fieldset class="donately-fields">
            <div class="donately-donation-amount" for="donately-amount">
                <label class="donately-dollar-sign" for="donately-amount">$</label> <input class="donately-text-input" data-numeric="" id="donately-amount" name="amount" placeholder="5" required="" type="text"/>
            </div>
            <div class="donately-donation-frequency">
                <div class="donately-radio-option">
                    <input class="donately-radio-input donately-recurring" id="donately-one-time-donation" name="recurring" value="0" type="radio"/> <label class="donately-label" for="donately-one-time-donation">One-time donation</label>
                </div>
                <div class="donately-radio-option">
                    <input checked="true" class="donately-radio-input" id="donately-recurring-donation" name="recurring" value="1" type="radio"/> <label class="donately-label" for="donately-recurring-donation" selected="true">Monthly recurring donation</label>
                </div>
            </div>
          </fieldset>
       
        {/*end donation  */}
      </Fragment>
   
    
    );
}

export default Donate


