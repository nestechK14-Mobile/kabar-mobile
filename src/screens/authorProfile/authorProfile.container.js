import React from 'react';
import AuthorProfileView from './authorProfile.view';
import { mockAPI } from '@/constants';

const AuthorProfileContainer = () => {
  return <AuthorProfileView {...{ mockAPI }} />;
};

export default AuthorProfileContainer;
