import Router from 'next/router'
import NProgress from 'nprogress'

// **
// import styles
// **
import "./page-loader.scss"

NProgress.configure({ showSpinner: false })

Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

export default PageLoader