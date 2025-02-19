import { useState } from 'react'
import styles from './app.module.css'
import data from './data.json'
import ButtonContainer from './ButtonContainer'
function App() {
  const [steps, setSteps] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  const canceClick = () => {
    if (activeIndex !== 0) setActiveIndex(activeIndex - 1)
  }
  const nextClick = () => {
    setSteps([...steps,])
    if (activeIndex !== data.length - 1) setActiveIndex(activeIndex + 1)
  }
  const restartClick = () => {
    setActiveIndex(0)
  }
  const btnClick = (event) => {
    if (event.target.tagName === "BUTTON") {
      setActiveIndex(+event.target.textContent - 1)
    }
  }

  return (
    <div className={styles.container} >
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']} >
            {steps[activeIndex].content}
          </div>
          <ul className={styles['steps-list']}
            onClick={event => btnClick(event)}
          >
            {steps.map((step, index) => {
              return (
                <li className={
                  activeIndex === index
                    ? `${styles['steps-item']} ${styles.active}`
                    : activeIndex > index
                      ? `${styles['steps-item']} ${styles.done}`
                      : styles['steps-item']

                } key={index} >
                  <button
                    className={styles['steps-item-button']
                    }>
                    {index + 1}
                  </button>
                  {step.title}
                </li>
              )
            })}

          </ul>
          <div className={styles['buttons-container']}>
            <ButtonContainer
              disabled={activeIndex === 0}
              onClick={canceClick}
            >
              Назад
            </ButtonContainer>
            {activeIndex === data.length - 1 ?
              <ButtonContainer
                onClick={restartClick}
              >
                Начачь сначало
              </ButtonContainer> :
              <ButtonContainer
                onClick={nextClick}
              >
                Далее
              </ButtonContainer>}
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
