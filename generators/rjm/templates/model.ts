import { createElement, ComponentType, Component } from 'react';
import { IOuterProps as IViewProps } from './view';
import { IProps } from './index';

export interface IOuterProps {
}

export interface IInnerProps extends IProps {
	innerViewComponent: ComponentType<IViewProps>;
}

export interface IState {
}

class <%= component %>Model extends Component<IInnerProps, IState> {
	constructor(props: IInnerProps) {
		super(props);

		this.state = {
		};
	}

	public render() {
		const {
			innerViewComponent,
			...rest
		} = this.props;

		return createElement(innerViewComponent, rest);
	}
}

export default (View: ComponentType<IViewProps>) => (props: IProps) => createElement(<%= component %>Model, { innerViewComponent: View, ...props });