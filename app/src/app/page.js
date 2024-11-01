import Navbar from '@/components/Navbar';
import HeaderLanding from '@/components/HeaderLanding';
import SidebarRight from '@/components/SidebarRight';
import './page.css';

export default function Home() {
  return (
    <div className="portfolio-container">
      <aside className="sidebar w-40">Left Sidebar</aside>
      <div className="content-wrapper" id="test">
        <main className="content">
          <HeaderLanding />
        </main>
      </div>
      <aside className="sidebar w-40">Right Sidebar</aside>
    </div>
  );
}
