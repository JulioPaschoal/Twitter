import style from './TextInput.module.css'

export default function TextInput (props){

  return (
    <div> 
      <textarea 
        className={style.input}
      {...props}
      />          
    </div>
  );
}