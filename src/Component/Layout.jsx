import { NavLink, Outlet } from 'react-router-dom';
import { IoMdArrowForward } from "react-icons/io";

const Layout = () => {
  // Navigation items for the sidebar
  const navItems = [
    { path: '/project', label: 'Main Projects' },
     { path: '/uiux', label: 'UI UX Design' },
    { path: '/project/web', label: 'Website' },
    { path: '/project/posters', label: 'Posters' },
    { path: '/project/illustrations', label: 'illustrations' },
    // Add other project-related navigation items
  ];

  return (
    <div className='container mx-auto md:px-28'>
      <div className='flex'>
        {/* Fixed Sidebar */}
        <div className='text-slate-900 w-2/12 sticky h-screen pt-28'>
          {navItems.map((item) => (
            <NavLink 
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `block py-2 hover:text-teal-600 ${
                  isActive ? 'text-teal-600 font-semibold' : ''
                }`
              }
              end
            >
              {({ isActive }) => (
                <h1 className='flex items-center gap-2'>
                  {item.label} 
                  {isActive && <IoMdArrowForward />}
                </h1>
              )}
            </NavLink>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className='w-10/12 h-screen overflow-auto pt-28'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;