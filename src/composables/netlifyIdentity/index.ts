import { onMounted, onUnmounted } from 'vue'
import * as netlifyIdentity from 'netlify-identity-widget'

const useNetlifyIdentity = () => {
  onMounted(() => {
    netlifyIdentity.init()
  })

  onUnmounted(() => {
    netlifyIdentity.off('login')
  })

  const open = () => netlifyIdentity.open()
  const openLogin = () => netlifyIdentity.open('login')
  const openSignup = () => netlifyIdentity.open('signup')
  const close = () => netlifyIdentity.close()
  const logout = () => netlifyIdentity.logout()

  return { open, openLogin, openSignup, close, logout }
}

export { useNetlifyIdentity }
