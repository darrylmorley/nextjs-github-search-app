import '../scss/styles.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
