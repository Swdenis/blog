import jsonPlaceholder from '../apis/jsonPlaceholger';

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts')

    dispatch({type: 'FETCH_POSTS', payload: res})
}