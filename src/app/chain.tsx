import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/main';

export default () => (
	<Switch>
		<Route path="/" exact component={Main} />
	</Switch>
);