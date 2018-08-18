import React from 'react';
import {connect} from 'react-redux';
import Api from './Api';
import axios from 'axios';

function RepoSearch(props){
	return(
		<div>
		 	<h1>Repo Search</h1>
		 	<form onSubmit={(event)=>props.handleSubmit(event, props.searchInputValue)}>
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
		handleSubmit: (event, query) => {
			event.preventDefault();
				console.log('submitting');
				//Api.getRepos(dispatch, query);
				axios.get(`https://api.github.com/search/repositories?q=${query}`)
				.then((response)=>{
					dispatch({ type: 'SET_REPOS', repos: response.data.items})
				});
				}
			}
	}
export default connect(mapStateToProps,mapDispatchToProps)(RepoSearch);