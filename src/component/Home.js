import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom';

function Home() {

  let history = useHistory();

  return (
    <>
   
      <Card style={{width:'16rem',height:'10rem', marginLeft:'38%',backgroundColor:'#C89D7C',borderRadius:'20px'}}>
        <Card.Body style={{boxShadow:'0 0 10px 0 #C89D7C', borderRadius:'20px' , marginTop: '5%'}}>

        <h4 style={{marginLeft:'6%'}}>First Login Here!!</h4><br/>
        <Button className="btn btn-success" style={{marginLeft:'19%'}} onClick = {() => history.push('/Login')}>Click For Login</Button> 
        </Card.Body>
      </Card>
    
    <div class="book">

         <span class="page turn"></span>
         <span class="page turn"></span>
         <span class="page turn"></span>
         <span class="page turn"></span>
         <span class="page turn"></span>
         <span class="page turn"></span>
         <span class="cover"></span>
         <span class="page"></span>
         <span class="cover turn"></span>
       </div>
    </>
   );
}
export default Home;