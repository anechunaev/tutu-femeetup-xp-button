const Generator = require('yeoman-generator');

const INTERFACE = 'HTMLDivElement';
const PATH = 'src/app/components';

class ReactJssGenerator extends Generator {
	constructor(args, opts) {
		super(args, opts);

		this.argument('component', { type: String, required: false });
		this.argument('interface', { type: String, required: false });
		this.argument('path', { type: String, required: false });

		this.option('yes', { desc: 'Say yes to all questions', alias: 'y', type: Boolean, default: !!this.options.component });
	}

	async prompting() {
		const prompt = [];

		if (!this.options.component) {
			prompt.push({
				type: 'input',
				name: 'component',
				message: 'Enter component name',
			});
		}

		if (!this.options.interface && !this.options.yes) {
			prompt.push({
				type: 'input',
				name: 'interface',
				message: 'What is HTMLElement type?',
				default: INTERFACE,
			});
		}

		if (!this.options.path && !this.options.yes) {
			prompt.push({
				type: 'input',
				name: 'path',
				message: 'Enter directory to source files',
				default: PATH + '/' + (this.options.component || this.answers.component),
			});
		}

		const answers = await this.prompt(prompt);
		this.answers = answers;
	}

	writing() {
		const res = {
			component: this.options.component || this.answers.component,
			interface: this.options.interface || this.answers.interface || INTERFACE,
			path: this.options.path || this.answers.path || PATH + '/' + (this.options.component || this.answers.component),
		};

		this.fs.copyTpl(
			this.templatePath('index.ts'),
			this.destinationPath(res.path + '/index.ts'),
			res,
		);
		this.fs.copyTpl(
			this.templatePath('style.ts'),
			this.destinationPath(res.path + '/style.ts'),
			res,
		);
		this.fs.copyTpl(
			this.templatePath('view.tsx'),
			this.destinationPath(res.path + '/view.tsx'),
			res,
		);
	}
}

module.exports = ReactJssGenerator;