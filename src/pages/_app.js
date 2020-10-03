import '../scss/styles.scss'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
