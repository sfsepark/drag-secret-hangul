import * as Hangul from 'hangul-js';
import data from './data.js';

const HANGUL_TAG = 'drag-secret-hangul__tag';
const HANGUL_TAG_OFF = 'drag-secret-hangul__tag__off';

const tag = document.createElement('span');
tag.classList.add(HANGUL_TAG);
tag.classList.add(HANGUL_TAG_OFF);

document.body.appendChild(tag);

const splitWord = (sentence) => sentence.split(' ');

const convertEngWordToKor = (word) => {
  const strArr = word.split('');
  const korArr = strArr.map((char) => data[char] ? data[char] : char);

  return Hangul.assemble(korArr);
}

const convertEngToKor = (sentence) => {
  const words = splitWord(sentence);
  const korWords = words.map(convertEngWordToKor);
  return korWords.reduce((prev, word) => prev !== '' ? `${prev} ${word}` : word , '');
}

const dragDetect = (e) => {
  const selection = document.getSelection();

  const text = selection.toString();

  if(!text){
    tag.classList.add(HANGUL_TAG_OFF);
    tag.innerText = '';
    return;
  }
  
  const { top, left, width } = selection.getRangeAt(0).getBoundingClientRect(0) ;
  const size = window.getComputedStyle(selection.anchorNode.parentElement, null).getPropertyValue('font-size') ;

  tag.classList.add(HANGUL_TAG_OFF);
  tag.style.top = `${top - 20}px`;
  tag.style.left = `${left}px`;
  tag.style.width = `${width}px`;
  tag.style.height = `${25/16 * size}px`;

  tag.style.fontSize = `${size}px`;

  const kor = convertEngToKor(text);

  tag.innerText = kor;

  tag.scrollTo(0,0);

  tag.classList.remove(HANGUL_TAG_OFF);
}

document.addEventListener("mouseup", dragDetect);