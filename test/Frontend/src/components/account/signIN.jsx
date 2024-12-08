import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    // TODO: Add sign in logic here
  };
  
  return (
    <div>
      <h1>Sign In</h1>
      <Form onSubmit={handleSubmit}>
        {/* ...existing form code... */}
        <Button variant="primary" type="submit">
          Sign In
        </Button>
        {/* <Button variant="outline-primary" onClick={handleGoogleSignIn}>
          Sign In with Google
        </Button> */}
      </Form>
    </div>
  );
  // return (
  //   <div>
  //     <h1>Sign In</h1>
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group controlId="formBasicEmail">
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control
  //           type="email"
  //           placeholder="Enter email"
  //           value={email}
  //           onChange={(event) => setEmail(event.target.value)}
  //         />
  //       </Form.Group>

  //       <Form.Group controlId="formBasicPassword">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(event) => setPassword(event.target.value)}
  //         />
  //       </Form.Group>

  //       <Button variant="primary" type="submit">
  //         Sign In
  //       </Button>
  //     </Form>
  //   </div>
  // );
}