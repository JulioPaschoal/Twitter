import TextInput from "../components/TextInput";
import { useState } from 'react';
import styles from './Index.module.css';

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
    <h1 className={styles.pageTitle}>TREINA TWEET</h1>
    <div className={styles.tweetContainer}>
      <img className={styles.avatar} src={'http://github.com/juliopaschoal.png'}/>
      <TextInput
        placeholder={'O que está acontecendo'}
        maxLength={maxLength}
        value={text}
        onChange={onTextChange}
      />
    </div>
    <div className={styles.buttonContainer}>
      <div>{text.length} / {maxLength}</div>
      <button className={styles.postButton} onClick={sentTweet}>Tweetar</button>
    </div>
    <ul>
        {tweeList.map(twee => {
          return (<li key={twee}>{twee}</li>)
        })} 
    </ul>
    </div>
  )
}
