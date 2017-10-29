import axios from 'axios'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=MASTER_CODER_1234'

export const FETCH_POSTS = 'fetch_posts'
export const FETCH_POST = 'fetch_post'
export const CREATE_POST = 'create_post'
export const DELETE_POST = 'delete_post'

export function createPost(values, callback) {
    const payload = axios.post(`${ ROOT_URL }/posts${ API_KEY }`, values).then(() => callback())
    return { type: CREATE_POST, payload }
}

export function fetchPosts() {
    const payload = axios.get(`${ ROOT_URL }/posts${ API_KEY }`)
    return { type: FETCH_POSTS, payload }
}

export function fetchPost(id) {
    const payload = axios.get(`${ ROOT_URL }/posts/${id}${ API_KEY }`)
    return { type: FETCH_POST, payload }
}

export function deletePost(id, callback) {
    axios.delete(`${ ROOT_URL }/posts/${id}${ API_KEY }`).then(() => callback())
    return { type: DELETE_POST, payload: id }
}