import * as React from 'react';

export type Classes = {[name: string]: string};

export interface IWithStyles {
	classes?: Classes;
}

export default (classes: Classes) => function <P>(Component: React.ComponentType<P & IWithStyles>): React.ComponentType<P> {
	return ((props: P) => <Component classes={classes} {...props} />);
};