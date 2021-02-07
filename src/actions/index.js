import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPostAndUsers = () => async (dispatch,getState) => {
    await dispatch(fetchPosts())

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value()

}

export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload: res.data})
}

export const fetchUser = id =>
    async dispatch => {
    const res = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER', payload: res.data})
}

///Memoized fetchUser
// export const fetchUser = id => dispatch => _fetchUser(id,dispatch)
// const _fetchUser = _.memoize(async (id,dispatch) => {
//     const res = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: res.data})
// })

///fetchUser without arrow functions
// export const fetchUser = function(id){
//     return async function(dispatch) {
//     const res = await jsonPlaceholder.get(`/users/${id}`);

//     dispatch({type: 'FETCH_USER', payload: res.data})
// }}