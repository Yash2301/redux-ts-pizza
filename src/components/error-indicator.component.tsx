import React from 'react';


interface IErrorIndicator {
  children: React.ReactNode
}

const ErrorIndicator = (props: IErrorIndicator) => {
  const { children } = props;

  return(
    <div>{ children }</div>
  )
}


export default ErrorIndicator;
