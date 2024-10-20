import style from './TextInput.module.css'

export default function TextInput ({placeholder, maxLength, ...props}){
  return (
    <div>
      <textarea className={style.input} placeholder={placeholder} maxLength={maxLength} {...props}/>
    </div>
  );
}