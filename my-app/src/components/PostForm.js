import React from 'react';
import { connect } from 'react-redux';
import { createPost, showAlert, hideAlert } from '../redux/actions';
import { Alert } from './Alert';

class PostFrom extends React.Component {
	
	constructor(props) {
		super(props)

		this.state = {
			title: ''
		}
	}

	submitHandler = event => {
		event.preventDefault();

		const {title} = this.state;

		if (!title.trim()) {
			this.props.showAlert('Название поста не может быть пустым!');
			return;
		}

		const newPost = {
			title,
			id: Date.now().toString()
		}

		this.props.createPost(newPost); // вызывает dispatch
		this.setState({title: ''});
	}

	changeInputHandler = event => {
		this.setState(prev => ({...prev, ...{
			[event.target.name]: event.target.value
		}}))
	}

	render() {
		return (
			<form onSubmit={this.submitHandler}>
				<div className="form-group">
					{this.props.alert && <Alert alert={this.props.alert}/>}
					<label htmlFor="title">Заголовок поста</label>
					<input 
						type="text" 
						className="form-control" 
						id="title"
						value={this.state.title}
						name='title'
						onChange={this.changeInputHandler}
					/>
				</div>
				<button className='btn btn-success'>Создать</button>
			</form>
		)
	}
}

const mapDispatchToProps = {
	createPost,
	showAlert,
	hideAlert
}

const mapStateToProps = state => ({
	alert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostFrom)