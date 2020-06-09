import React, { Component } from 'react';
import { parseISO, format } from 'date-fns';

export class Date extends Component {
	constructor(props) {
		super(props);
		this.dateString = this.props.dateString;
	}

	render() {
		const date = parseISO(this.dateString);
		return <time dateTime={this.dateString}>{format(date, 'LLLL d, yyyy')}</time>;
	}
}

export default Date;
