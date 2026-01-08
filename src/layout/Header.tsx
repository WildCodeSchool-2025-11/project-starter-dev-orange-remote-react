import './Header.css';
const menu = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Contact', link: '/contact' },
];

interface HeaderProps {
    setPage: (page: string) => void;
}

const Header = ( { setPage} :HeaderProps) => {
    return (
        <header>
            <nav>
                <ul>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a onClick={() => setPage(item.name.toLowerCase())}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
};

export default Header;