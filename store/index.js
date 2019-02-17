import app from './modules/app'
import theme from './modules/theme'

export const modules = {
  app,
  theme
}

export const state = () => ({
  token: localStorage.getItem('token') || '',
  userid: localStorage.getItem('userid') || '',
  user_config: JSON.parse(localStorage.getItem('user_config')) || {
    avatar: '',
    email: '',
    name: '',
    role: ''
  },
  theme: JSON.parse(localStorage.getItem('theme')) || {
    color: '',
    textColor: '',
    pairColor: ''
  }
})

export const mutations = {
  login: (state, data) => {
    state.token = data.token
    state.userid = data.userid
    state.user_config = data.user_config
    localStorage.setItem('token', data.token)
    localStorage.setItem('userid', data.userid)
    localStorage.setItem('user_config', JSON.stringify(data.user_config))
  },
  logout: state => {
    state.token = ''
    state.userid = 0
    state.user_config = {
      avatar: '',
      email: '',
      name: '',
      role: ''
    }
    state.theme = {
      color: '',
      textColor: ''
    }
    localStorage.removeItem('token')
    localStorage.removeItem('userid')
    localStorage.removeItem('user_config')
    localStorage.removeItem('theme')
  }
}

export const actions = {
  //
}
