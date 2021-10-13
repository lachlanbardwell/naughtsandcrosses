import React from 'react';
import { UserLogin } from 'client/components/login/login';
import { LachFooter } from 'client/components/footer/footer';

export const LoginPage: React.FC = () => {
  return (
    <>
      <UserLogin></UserLogin>
      <LachFooter />
    </>
  );
};
