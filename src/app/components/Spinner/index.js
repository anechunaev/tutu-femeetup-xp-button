import * as React from 'react';
import * as style from './style.less';

export default class extends React.Component {
	static defaultProps = {
		dots: 3,
	}
	render() {
		return (
			<div>
				{new Array(this.props.dots).join().split(',').map((segment, index) => (
					<div
						key={index}
						className={style.segment}
					/>
				))}
			</div>
		);
	}
}