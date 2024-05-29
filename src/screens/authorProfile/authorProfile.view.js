import React from 'react';
import ListFromAPI from './listFromAPI';
import { mockAPI } from '@/constants';

const AuthorProfileView = () => {
  return(   
    <ListFromAPI {...{ mockAPI }} />
  )  ;
  
};

export default AuthorProfileView;