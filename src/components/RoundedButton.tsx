import './RoundedButton.css';

interface RoundedButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function RoundedButton (props: RoundedButtonProps) {
  return (
    <button 
      className='rounded-button' 
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}