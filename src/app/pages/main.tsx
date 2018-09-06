import * as React from 'react';
import './shared.less';
import Button from '../components/Button';
import Spinner from '../components/Spinner'

export default () => (
	<section>
		<h1>Main page</h1>
		<p>
			<Button>Hello button</Button>
		</p>
		<p>
			<Button color="two">Hello blue button</Button>
		</p>
		<p>
			<Button arrow>Hello blue button</Button>
		</p>
		<p>
			<Button arrow color="two">Hello blue button</Button>
		</p>
		<p>
			<Spinner />
		</p>
	</section>
);