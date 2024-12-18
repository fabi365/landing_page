import React,{useState} from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks =[
    {
        id:1, 
        title:"Inicio",
        link:"/"
    },

    {
        id:2, 
        title:"Sobre Nosotros",
        link:"/"
    },

    {
        id:3, 
        title:"Contacto",
        link:"/"
    },

]

const navbarRedes=[
    {
        id:1, 
        title:"Instagram",
        link:"/",
        icon:'bi bi-instagram'   
    },

    {
        id:2, 
        title:"Whatsapp",
        link:"/",
        icon:'bi bi-whatsapp'   
    }
]


const Navbar = () => {
    const [isOpen,setIsopen]= useState(false)
    const toggleMenu=()=>{
    setIsopen(!isOpen)
    }


  return (
    <nav className="fixed top-0 left-0 bg-lime-400 w-full bg-opacity-30 backdrop-blur-md">
        <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
            <div>
                <img src= {Logo} alt='Logo de la pagina'className='w-[100px]'/>
            </div>


            <button onClick={toggleMenu} className=' md:hidden text-white'>
                <svg 
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                >
                {isOpen ? (<path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d="M4 4L20 20M4 20L20 4"
                       

                   />): (<path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                    /> )}

                    </svg>


            </button>
            <div className='hidden md:block'>
                <ul className='flex sm:space-x-48 space-x-4'>
                    {navbarlinks.map((link)=>(
                        <li key={link.id}>
                            <a className='text-white sm:text-lg text-sm hover:text-gray-900 transition-transform hover:scale-110 transform inline-block duration-300'
                            href={link.link}>{link.title}</a>
                        </li>    
                    ))}
                </ul>
            </div>

            <div className='hidden md:block'>
                <ul className='flex space-x-4'>
                {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a target='__blank'
                               rel='noopener noreferrer'
                               className='inline-block transition-transform duration-300 transform hover:scale-125'
                             href={link.link}>
                                <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-gray-900 transition-all duration-300`}>

                                </i>
                            </a>
                        </li>    
                    ))}
                </ul>
            </div>         
        </div>

       {/*menu movil */}
       <div className={`md:hidden absolute w-full bg-lime-700 transition-all duration-300 ${isOpen ? "opacity-100 visible":"opacity-0 invisible"}`}>
            <ul className="flex flex-col px-4 py-2">
                    {navbarlinks.map((link)=>(
                        <li key={link.id} className="py-2 text-center">
                            <a className="text-white hover:text-gray-900" 
                            href={link.link}onClick={()=>setIsopen(false)}>{link.title}</a>
                        </li>    
                    ))}
                </ul>

                <ul className="flex space-x-4 py-2 border-t border-gray-900 justify-center">
                {navbarRedes.map((link)=>(
                        <li key={link.id}>
                            <a target='__blank'
                               rel='noopener noreferrer'
                               className="inline-block"
                             href={link.link} onClick={()=>setIsopen(false)}>
                                <i className={`${link.icon} text-lg text-white hover:text-gray-950`}>

                                </i>
                            </a>
                        </li>    
                    ))}
                </ul>

            </div>

    </nav>
  )
}

export default Navbar
