
import './styles.css'
 
export default function MyApp({ Component, pageProps }) {
  try {
    if (window.location.pathname.match(/^\/cloud(\/?)$/)) window.location.replace("/cloud/assets/assetInfo")
    else if (window.location.pathname.match(/^\/classic(\/?)$/)) window.location.replace("/classic/badges/badgeInfo")
  } catch {}

  return <Component {...pageProps} />
}
