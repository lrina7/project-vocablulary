import Item from './Table/Item/Item';

const Table = (props) => {
  let words = require('../words.json');
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
    {words.map((words)=> {
      return <Item key={words.id} {...words} isEdit={isEdit}/>
    })}
    </thead>
  </table>)
}

export default Table;