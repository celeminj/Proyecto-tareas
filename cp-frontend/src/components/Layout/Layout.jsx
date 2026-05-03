import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';

function Layout() {
  return (
   <div className="min-h-screen">
  <Navbar />

  <div className="flex">
    <div className="w-64 fixed h-[calc(100vh-64px)]">
      <Sidebar />
    </div>

    <main className="ml-64 flex-1">
      <Outlet />
    </main>
  </div>
</div>
  );
}

export default Layout;