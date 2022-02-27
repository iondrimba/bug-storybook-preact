import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button, Wrapper } from './styles';

/**
 * Primary UI component for user interaction
 */
const ButtonCP = ({ primary, backgroundColor, size, label, ...props }) => {
	const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
	const [name, setName] = useState(label);
	useEffect(() => {
		console.log('effect');
		setName('testing hook');
	}, []);

	useEffect(() => {
		setName(label);
	}, [label]);
	return (
		<Wrapper>
			<Button
				type="button"
				className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
				style={backgroundColor && { backgroundColor }}
				{...props}
			>
				{name}
			</Button>
		</Wrapper>
	);
};

ButtonCP.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * What background color to use
	 */
	backgroundColor: PropTypes.string,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

ButtonCP.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: 'medium',
	onClick: undefined,
};

export {
	ButtonCP,
}
