import * as React from 'react';

export interface IOuterProps extends React.Props<<%= interface %>> {
}

export interface IInnerProps extends IOuterProps {
	classes: {[key: string]: any};
}

class <%= component %>View extends React.PureComponent<IInnerProps> {
	public render() {
		const {
			classes,
			...rest
		} = this.props;

		return (
			<div
				className={classes.wrapper}
				{...rest}
			>
				Hello react-jss!
			</div>
		);
	}
}

export default <%= component %>View;