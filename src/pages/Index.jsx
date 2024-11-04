import TextInput from "../components/TextInput";
import { useState } from 'react';
import styles from './Index.module.css';
import Tweet from "../components/Tweet";

export default function Index() {
  const [text, setText] = useState('');
  const [tweeList, setTweeList] = useState([])
  const maxLength = 125;

  const tweet = {
    date: new Date(),
    text: text,
    user: {
      name: 'Julio Paschoal',
      username: '@juliopaschoal',
      picture: 'http://github.com/juliopaschoal.png'
    },

  }

  function onTextChange(event){
    const text = event.target.value;
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sentTweet(){
    setTweeList([...tweeList, tweet]);
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
    <ul className={styles.tweetList}>
        {tweeList.map(tweet => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li className={styles.tweetListItem}>
              <Tweet tweet={tweet}/></li>
          )
        })} 
    </ul>
    </div>
  )
}
