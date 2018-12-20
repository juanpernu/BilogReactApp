import Router from 'next/router'
import NProgress from 'nprogress'

// **
// import styles
// **
import "./page-loader.scss"

export default PageLoader = () => {
  NProgress.configure({ showSpinner: false })

  Router.onRouteChangeStart = () => {
    NProgress.start()
  }
  Router.onRouteChangeComplete = () => NProgress.done()
  Router.onRouteChangeError = () => NProgress.done()
}