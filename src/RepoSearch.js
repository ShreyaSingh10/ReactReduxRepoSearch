import React from 'react';
import {connect} from 'react-redux';
import Api from './Api';

function RepoSearch(props){
	return(
		<div>
		 	<h1>Repo Search</h1>
		 	<form onSubmit={props.handleSubmit}>
			 	<input value = {props.searchInputValue } 
			 	onChange={props.handleInputChange} />
			</form>
			<ul>
				{props.repos.map((repo)=>{
					return <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
				})}
			</ul>
		</div>
	);
}

const mapStateToProps =(state) => {
	console.log('state', state);
	return {
		searchInputValue: state.searchInputValue,
		repos: state.repos
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputChange: (event) => {
			console.log('handleInputChange');
			dispatch({ type:'SEARCH_INPUT_CHANGE', value: event.target.value});
		},
		handleSubmit: (event) => {
			event.preventDefault();
				console.log('submitting');
				Api.getRepos(dispatch);
				}
			}
	}
export default connect(mapStateToProps,mapDispatchToProps)(RepoSearch);