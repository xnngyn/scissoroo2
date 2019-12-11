import Api from '@/core/Api'

export default {
  fetchPosts () {
    return Api().get('posts')
  }
}