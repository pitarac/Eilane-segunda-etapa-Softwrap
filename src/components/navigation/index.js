import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className='flex justify-center align-middle bg-blue-500 p-4 mb-4'>
      <NavLink
        className='mx-4 font-semibold hover:text-white text-gray-800'
        to='/'>
        Home
      </NavLink>
      <NavLink
        className='mx-4 font-semibold hover:text-white text-gray-800'
        activeClassName='text-white'
        to='/new'>
        Novo Usuario
      </NavLink>
    </nav>
  );
}
export default Navigation;
