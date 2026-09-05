import { profile } from '../../data/profile'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <span>&copy; 2026 {profile.handle}</span>
      <span>BUILT WITH REACT + VITE</span>
      <span>{profile.location.toUpperCase()}</span>
    </footer>
  )
}

export default Footer
