import React from 'react'

import {
    LogInNavbar,
    UserSelection,
    SuperUsuario,
    Empresa,
  } from '../../components/index';

export default function Home() {
  return (
    <div className="bg-slate-200">
      <LogInNavbar/>
      <UserSelection/>
      <SuperUsuario/>
      <Empresa/>
      
    </div>
  );
}

