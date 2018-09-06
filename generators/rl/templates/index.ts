import View, { IOuterProps as IViewProps } from './view';
import style from './style.less';
import withStyles from 'src/app/lessInjector';

export type IProps = IViewProps;

const component = withStyles(style)(View);
component.displayName = "<%= component %>";
export default component;