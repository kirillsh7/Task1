import styles from './app.module.css'
export default function ButtonContainer({ children, onClick, disabled }) {
	return (
		<button className={styles.button}
			disabled={disabled}
			onClick={onClick}
		>{children}</button>

	)
}