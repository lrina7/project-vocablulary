const Item = (props)=> {
  const {english, transcription, russian, isEdit} = props;

  if (isEdit) return(
<tr>
      <td><input value={english}></input></td>
      <td><input value={transcription}></input></td>
      <td><input value={russian}></input></td>
      <td>
        value=<button>finish</button>
        </td>
      </tr>
  )

  return(
    <tr>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>
        <button>edit</button>
        </td>
      </tr>
  )
}

export default Item;