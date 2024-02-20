import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const UseLocationDemo = () => {
    console.log('useLocation-', useLocation());
    console.log('useParams-', useParams());
    const {user}  = useParams();
    console.log('user-', user);
    const getQueryParams = (paramToGet) => {
        const queryParams = new URLSearchParams(window.location.search);
        const param = queryParams.get(paramToGet);
        console.log('query params-', param);
    };
  return (
    <div>UseLocationDemo{getQueryParams('user')}</div>
  )
}

export default UseLocationDemo