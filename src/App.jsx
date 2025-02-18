import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const [error, setError] = useState('')
  const [isValueVaild, setIsValueVaild] = useState(false)
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  const onInputButtonClick = () => {
    const promptValue = prompt()
    if (promptValue.length > 3) {
      setValue(promptValue)
      setError('')
      setIsValueVaild(true)

    } else {
      setError(promptValue)
      setValue('')
      setIsValueVaild(false)
    }
  }
  const onAddButtonClick = () => {
    const id = Date.now()
    const date = new Date().toLocaleString('ru-RU', options)
    const updatedList = [...list, { id, value, date }]
    setValue('')
    setError('')
    setList(updatedList)
  }

  return (
    <div className="app">
      <h1 className="page-heading">Ввод значения</h1>
      <p className="no-margin-text">
        Текущее значение <code>value</code>: "<output className="current-value">{value}</output>"
      </p>
      {error !== '' && <div className="error">Введенное значение {error} должно содержать минимум 3 символа</div>}
      <div className="buttons-container">
        <button className="button" onClick={() => { onInputButtonClick() }}>Ввести новое</button>
        <button className="button"
          disabled={!isValueVaild}
          onClick={() => onAddButtonClick()}
        >Добавить в список</button>
      </div>
      <div className="list-container">
        <h2 className="list-heading">Список:</h2>
        {list.length === 0 && <p className="no-margin-text">Нет добавленных элементов</p>}
        <ul className="list">
          {list.map((el) => {
            return (<li className="list-item" key={el.id}>
              {el.value}
              {' '}
              <span>{el.date}</span>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
