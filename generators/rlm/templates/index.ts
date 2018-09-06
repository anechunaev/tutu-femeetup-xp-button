import View, { IOuterProps as IViewProps } from './view';
import Model, { IOuterProps as IModelProps } from './model';
import style from './style.less';
import withStyles from 'src/app/lessInjector';

export type IProps = IViewProps & IModelProps;

const component = Model(withStyles(style)<any>(View));
export default component;