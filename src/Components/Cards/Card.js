import React from 'react';
import './Card.css';


//https://codesandbox.io/s/400lp1yjjw?from-embed this might help with opening box and close button
const Card = () => {
  return( 
  <div className='pa4'>
    <section class="mw5 mw7-ns center bg-moon-gray pa3 ph3-ns relative">
    <a class="f6 link dim ph3 pv2 dib right mb2 white bg-black absolute top-1 right-1" href="#0">X</a>
    <h1 class="mt0">Here is one convo</h1>
    <p class='lh-copy measure blue mb0'>
    @username
    </p>
    <p class="lh-copy measure mt1">
      With the information down here.... who knows what it could all be about
    </p>
    <form class="pa4 black-80">
      <div class="measure flex">
        <input id="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder='reply' type="text" aria-describedby="name-desc" />
        <a class="f6 link dim ph3 pv2 dib right mb2 white bg-black" href="#0">submit</a>    
      </div>
    </form>  
  </section>
  </div>
  );
}

export default Card;