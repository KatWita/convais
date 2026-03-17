import './contact-select.scss'
import Select, { components, type DropdownIndicatorProps, type GroupBase } from 'react-select'
import { HiChevronDown } from 'react-icons/hi'
import { MdError } from 'react-icons/md'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'

export type MyOption = {
	value: string
	label: string
}

type ContactSelectProps = {
	selectValue: MyOption | null
	setSelectValue: Dispatch<SetStateAction<MyOption | null>>
	label: string
	errorMsg: string | undefined
	showError: boolean
	isSubmitting: boolean
}

const options = [
	{ value: 'one', label: 'One' },
	{ value: 'two', label: 'Two' },
	{ value: 'three', label: 'Three' },
]

const CustomDropdownIndicator = (props: DropdownIndicatorProps<MyOption, false, GroupBase<MyOption>>) => (
	<components.DropdownIndicator {...props}>
		<HiChevronDown size={20} className={`dropdown-icon ${props.selectProps.menuIsOpen ? 'dropdown-icon--open' : ''}`} />
	</components.DropdownIndicator>
)

const ContactSelect = ({
	selectValue,
	setSelectValue,
	label,
	errorMsg,
	showError,
	isSubmitting,
}: ContactSelectProps) => {
	const [lastError, setLastError] = useState(errorMsg)

	useEffect(() => {
		if (errorMsg) setLastError(errorMsg)
	}, [errorMsg])

	const visible = showError && !!errorMsg && !isSubmitting

	return (
		<div className={visible ? 'form__input-box error' : 'form__input-box'}>
			<label htmlFor="option-input" className="form__label">
				{label}
				<span>*</span>
			</label>
			<Select
				unstyled
				name="option"
				inputId="option-input"
				value={selectValue}
				onChange={newValue => setSelectValue(newValue)}
				options={options}
				isSearchable={false}
				placeholder="SELECT OPTION..."
				components={{
					DropdownIndicator: CustomDropdownIndicator,
					IndicatorSeparator: null,
				}}
				classNames={{
					control: state => (state.isFocused ? 'select-control select-control--is-focused' : 'select-control'),
					menu: () => 'select-menu',
					option: state =>
						state.isSelected
							? 'select-option select-option--is-selected'
							: state.isFocused
								? 'select-option select-option--is-focused'
								: 'select-option',
					placeholder: () => 'select-placeholder',
					singleValue: () => 'select-value',
				}}
			/>
			<p className={`form__error ${visible ? 'form__error--visible' : ''}`}>
				<MdError fill="hsl(0, 81%, 61%)" /> {lastError}
			</p>
		</div>
	)
}
export default ContactSelect
