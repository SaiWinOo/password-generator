import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import AlertDismissible from './Alert'
function Generator() {


    const [arr, setArr] = useState(['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z',1,2,3,4,5,6,7,8,9,0,'@','#','$','%','^','&','*','!'])
    const [password, setPassword] = useState();
    const [show, setShow] = useState(false);

    const generate=()=>{
        const password = arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] +  arr[Math.round(Math.random()*68)] ;
        setPassword(password)
    }

    function copy(password) {
        navigator.clipboard.writeText(password);
        setShow(true);
        
        setTimeout(() => {
            setShow(false);
        }, 2500);
      }
  return (
    <div className='row justify-content-center align-items-center vh-100 text-center'>
        { show && <div className='alert_modify col-12 col-md-6 col-lg-4 w3-animate-zoom'>
            <AlertDismissible/>
        </div>}
       <div className="col-12 col-md-6 col-lg-3">
        
       <h1 onClick={()=>copy(password)} data-tip='Copy to clipboard' className='min-vh-100px mb-4  p-3 '>{password} <ReactTooltip/></h1>
        <button className='btn btn-primary' onClick={generate}>Generate Strong password</button>
       </div>
      
    </div>
  )
}

export default Generator;