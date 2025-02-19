import styles from './app.module.css'
export default function StepList() {
	return (
		<ul className={styles['steps-list']}>
			{/* Выводите <li> с помощью массива steps и метода map(), подставляя в разметку нужные значения и классы */}
			<li className={styles['steps-item'] + ' ' + styles.done}>
				{/* Для того, чтобы вычислить необходимый класс используйте активный индекс, текущий индекс, а также тернарные операторы */}
				<button className={styles['steps-item-button']}>1</button>
				{/* При клике на кнопку установка выбранного шага в качестве активного */}
				Шаг 1
			</li>
			<li className={styles['steps-item'] + ' ' + styles.done}>
				<button className={styles['steps-item-button']}>2</button>
				Шаг 2
			</li>
			<li
				className={
					styles['steps-item'] +
					' ' +
					styles.done +
					' ' +
					styles.active
				}
			>
				<button className={styles['steps-item-button']}>3</button>
				Шаг 3
			</li>
			<li className={styles['steps-item']}>
				<button className={styles['steps-item-button']}>4</button>
				Шаг 4
			</li>
		</ul>
	)
}