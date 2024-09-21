import React from 'react'

interface ButtonProps {
  text: string;
  btnClass: string;
  icon?: React.ReactElement; // Make icon optional
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ text = "Click Me", btnClass, icon, onClick }: ButtonProps) {

  return (
    <button className={`btn ${btnClass} `} onClick={onClick}>
        {icon}
        {text}
    </button>
  )
}
