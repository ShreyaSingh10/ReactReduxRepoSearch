
function getRepos(dispatch, query) {
	//let query = 'steak';
	fetch(`https://api.github.com/search/repositories?q=${query}`)
		.then((response)=> {
			return response.json();
		})
		.then((data)=>{
			dispatch({type:'SET_REPOS', repos: data.items})
		});
		console.log('submitting');
}

export default {
	getRepos
};