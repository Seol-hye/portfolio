import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
const navigation = [['홈', '/#home'], ['소개', '/#about'], ['기술', '/#skills'], ['프로젝트', '/#projects']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <header className="site-header"><div className="nav-wrap">
      <Link className="brand" to="/" onClick={() => { setOpen(false); if (pathname === '/') window.scrollTo({top: 0, behavior: 'smooth'}); }}>PORTFOLIO<span>.</span></Link>
      <button className="menu-toggle" type="button" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="주요 메뉴">
        {navigation.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
    </div></header>
  );
}
