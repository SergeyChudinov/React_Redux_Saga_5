import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/actions';
import Post from './Post';
import { Loader } from './Loader';


const FetchedPosts = () => {
	const dispatch = useDispatch();
	const posts = useSelector(state => state.posts.fetchedPosts);
	const loading = useSelector(state => state.app.loading);
	// console.log('posts999', posts)
	// console.log('loading', loading)

	if (loading) {
		return <Loader/>
	}

	if (!posts.length) {
		return <button 
			className='btn btn-primary'
			onClick={() => dispatch(fetchPosts())}
			// onClick={() => props.fetchPosts()}
			>
		Загрузить</button>
	}
	
	return posts.map(post => <Post post={post} key={post.id}/>)
}

export default FetchedPosts;

// const mapStateToProps = state => {
// 	console.log('syncFetchedPosts', state)
// 	return {
// 		syncFetchedPosts: state.posts.fetchedPosts
// 	}
// }
// const mapDispatchToProps = {
// 	fetchPosts
// }
// export default connect(mapStateToProps, mapDispatchToProps)(FetchedPosts);

