import React from 'react';
import {connect} from 'react-redux';

function RepoSearch(props){
	return(
		<div>
		 	<h1>Repo Search</h1>
		 	<form onSubmit={props.handleSubmit}>
			 	<input value = {props.inputValue} 
			 	onChange={props.handleInputChange} />
		 	</form>
		 	<ul>
		 		<li>repo 1</li>
		 	</ul>
		</div>
	);
}

const mapStateToProps =(state) => {
	console.log('state', state);
	return {
		inputValue: state.inputValue
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange: (event) => {
			console.log('handling');
			dispatch({ type: 'SEARCH_INPUT_CHANGE',
			value: event.target.value
		});
		},
		handleSubmit : (e) => {
			e.preventDefault();
			console.log('submitting');
		}
	}
}
export default connect(mapStateToProps)(RepoSearch);