import React from 'react';

import logo from './book1.png';

export default function Intro() {
    return(
<>

<h2>Books Collection</h2><br/>
   <div className="book1">
     <img src={logo}/>
  </div> 
</>
    );
}