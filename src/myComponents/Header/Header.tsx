import { Navbar } from "../Navbar/Navbar"



export const Header = () => {
    const links = [
        
           {name:'Home',url:'/'} ,
           {name:'Genres', dropdownMenuItems: ['1','2']} ,
           {name:'Country',url:'/country'} ,
           {name:'Movies',url:'/movies'} ,

    ]
  return (
    <>
    <div className="w-full">
    <Navbar brand="FilmySansar" links={links}  />
    </div>
    </>
  )
}
