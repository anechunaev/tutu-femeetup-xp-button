import * as React from 'react';
import * as style from './style.less';
const cn = require('classnames');

class Button extends React.Component {
	static defaultProps = {
		color: 'one',
		arrow: false,
	};

	render() {
		return (
			<button
				className={cn(
					style.wrapper,
					style[this.props.color],
					{
						[style.arrowRight]: this.props.arrow,
					}
				)}
			>
				{this.props.children}
				{this.props.arrow && (
					<svg
						className={style.arrowShape}
						viewBox="0 0 1 1"
						preserveAspectRatio="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
								<stop offset="0%" stopColor="#20c5e0" />
								<stop offset="100%" stopColor="#0a86ff" />
							</linearGradient>
						</defs>
						<path
							fill="url(#grad)"
							d="M-.1 0L0 0Q.25 0 .5 .125L1 .5L.5 .875Q.25 1 -.1 1z"
						/>
					</svg>
				)}
				
			</button>
		);
	}
}

export default Button;