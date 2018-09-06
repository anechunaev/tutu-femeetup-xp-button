import View, { IOuterProps as IViewProps } from './view';
import style from './style';
import withStyles from 'react-jss';

export type IProps = IViewProps;

const component = withStyles(style)(View);
component.displayName = "<%= component %>";
export default component;