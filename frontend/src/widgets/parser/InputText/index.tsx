import { useAppSelector } from '@shared/libs'

import { parsingTextSelectors, useParsingTextActions } from '@entities/text'
import { LoadTextFromFileFeature, ParseTextFeature } from '@features/parser'

import styles from './InputText.module.scss'

export const InputTextWidget = () => {
	const text = useAppSelector(parsingTextSelectors.text)
	const { updateText } = useParsingTextActions()

	return (
		<>
			<div className={styles.title}>Текст</div>
			<div className={styles.inputText}>
				<textarea value={text} onChange={(e) => updateText({ data: e.target.value })} placeholder="Введите текст..." />
			</div>
			<div className={styles.btns}>
				<ParseTextFeature />
				<LoadTextFromFileFeature />
			</div>
		</>
	)
}
