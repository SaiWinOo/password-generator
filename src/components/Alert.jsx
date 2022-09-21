import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import {BsXLg} from 'react-icons/bs';

export default function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        
        <div className="d-flex justify-content-between">
        Copy success!
          <div onClick={() => setShow(false)} variant="outline-success">
            <BsXLg/>
          </div>
        </div>
      </Alert>

    </>
  );
}


