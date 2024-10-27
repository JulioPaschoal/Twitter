import TextInput from "../components/TextInput";
import { useState } from 'react';

export default function Index() {
  const [text, setText] = useState('');
  const [tweeList, setTweeList] = useState([])
  const maxLength = 125;

  function onTextChange(event){
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sentTweet(){
    setTweeList([...tweeList, text]);
  }


  return (
    <div>
    <h1>Treina Tweet</h1>
    <div>
      <img src={'http://github.com/juliopaschoal.png'}/>
      <TextInput
        placeholder={'O que está acontecendo'}
        maxLength={maxLength}
        value={text}
        onChange={onTextChange}
      />
    </div>
    <div>
      <div>{text.length} / {maxLength}</div>
      <button onClick={sentTweet}>Tweetar</button>
    </div>
    <ul>
        {tweeList.map(twee => {
          return (<li key={twee}>{twee}</li>)
        })} 
    </ul>
    </div>
  )
}
