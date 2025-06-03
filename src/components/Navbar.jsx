import { FaGithub, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import logo from '../assets/My_Logo.png'


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} className='mx-2' width={100} height={70} alt='logo' />
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/mudit-singh-99a9a2223/"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn'
        >
          <FaLinkedin />
        </a>

        <a href="https://github.com/Pro54Grammer45"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Github'
        >
          <FaGithub />
        </a>

        <a href="https://www.instagram.com/_mudit_singh_14"
          target='_blank'
          rel='noopener noreferrer'
          aria-label='instagram'
        >
          <FaInstagram />
        </a>


      </div>
    </nav>
  )
}

export default Navbar