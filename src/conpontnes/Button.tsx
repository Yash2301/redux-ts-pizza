import React from 'react';
import classNames from 'classnames';


interface IButton {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
  outline?: boolean
  children: React.ReactNode,
}

const Button = (props: IButton) => {
  const { onClick, children, outline } = props;

  return (
    <button
      onClick={ onClick }
      className={ classNames('button', {
        'button--outline': outline,
      })}>
      { children }
    </button>
  );
};



export default Button;