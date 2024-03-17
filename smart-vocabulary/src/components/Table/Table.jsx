import Item from './Item/Item';
import words from '../../constants/words';

const Table = (props) => {
  let isEdit = false;

  return(
  <table>
    <caption>English words</caption>
    <thead>
    <tr>
      <th>english</th>
      <th>transcription</th>
      <th>russian</th>
      <th></th>
    </tr>
    {words.map((word)=> {
      return <Item key={word.id} {...word} isEdit={isEdit}/>
    })}
    </thead>
  </table>)
}

export default Table;