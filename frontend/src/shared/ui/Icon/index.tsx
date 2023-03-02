import React from 'react'

interface IconProps {
	type: string
}

export const Icon: React.FC<IconProps> = (props: IconProps) => {
	const { type } = props

	switch (type) {
		case 'burger-menu':
			return (
				<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M3.5 21V18.6667H24.5V21H3.5ZM3.5 15.1667V12.8333H24.5V15.1667H3.5ZM3.5 9.33333V7H24.5V9.33333H3.5Z"
						fill="#094D74"
					/>
				</svg>
			)
		default:
			return null
	}
}
