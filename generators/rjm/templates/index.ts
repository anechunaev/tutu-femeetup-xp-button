import View, { IOuterProps as IViewProps } from './view';
import Model, { IOuterProps as IModelProps } from './model';
import style from './style';
import withStyles from 'react-jss';

export type IProps = IViewProps & IModelProps;

const component = Model(withStyles(style)(View));
export default component;