import Api from '@/services/Api'

export default {
  fetchResults () {
    return Api().get('results')
  }
}