import React from 'react'
import { FaDiscord, FaInstagram, FaGithub, FaSpotify } from "react-icons/fa";


const links = [
  { href: 'https://discord.gg/com', icon: <FaDiscord /> },
  { href: 'https://instagram.com/smolhammy252', icon: <FaInstagram /> },
  { href: 'https://github.com/smolsuryansh', icon: <FaGithub /> },
  { href: 'https://open.spotify.com/user/88dxmwj7yf6fazqd9uudoizcs?si=e0084db082d14686', icon: <FaSpotify /> },
]

const Footer = () => {
  return (
    <footer className='w-screen bg-rose-300 py-4 text-[#131020]'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
        <p className='text-center text-sm md:text-left '>
          Made by SmolHammy, because I can :3
        </p>

        <div className='flex justify-center gap-4 md:justify-start'>
          {links.map((link) => (
            <a
              key={link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className='text-[#131020] transition-colors duration-5-- ease-in-out hover:text-white'
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer