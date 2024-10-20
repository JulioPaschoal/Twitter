import { useState } from 'react';
import style from './TextInput.module.css'

export default function TextInput ({placeholder, maxLength, ...props}){
  const [text, setText] = useState('');

  function onTextChange(event){
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }
  return (
    <div>
      <textarea 
        className={style.input}
        placeholder={placeholder}
        maxLength={maxLength} value={text}
        onChange={onTextChange}
      {...props}
      />
      <p>{text.length} / {maxLength}</p>
    </div>
  );
}