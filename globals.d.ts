declare module 'react-jss' {
	export type ISheetsRegistry = any;
	export const SheetsRegistry: ISheetsRegistry;
	export const JssProvider: any;
	export const ThemeProvider: any;
	const withStyles: (style: any) => (component: any) => any;
	export const withTheme: (component: any) => any;
	export default withStyles;
}

declare module "*.json" {
	const value: {[key: string]: any};
	export default value;
}

declare module "*.less" {
	export const value: any;
	export default value;
}