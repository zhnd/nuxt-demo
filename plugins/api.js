export default ({ $axios }, inject) => {
  inject('api', {
    getPublicKey() { return $axios.get('/api/get_public_key') },
    login(data) { return $axios.post('/api/login', data) },
    logout() { return $axios.get('/api/logout') },
    getArticle(params) { return $axios.get('/api/get_article', { params }) }
  })
}
