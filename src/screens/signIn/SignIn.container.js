import React, { useState, useEffect } from 'react';
import SignInView from './SignIn.view';

const SignInContainer = () => {
  const [stated, setStated] = useState(12);

  useEffect(() => {
    setTimeout(() => {
      setStated(100);
    }, 5000);
  }, []);

  return <SignInView stated={stated} />;
};

export default SignInContainer;
