import './header.scss'

const Header = () => {
	return (
		<header className='header'>
			<div className='logo'>Andrewebs</div>
			<nav className='header__nav nav'>
				<ul className='nav__list'>
					<li>
						<a href='#'>Головна</a>
					</li>
					<li>
						<a href='#'>Про мене</a>
					</li>
					<li>
						<a href='#'>Портфоліо</a>
					</li>
					<li>
						<a href='#'>Відгуки</a>
					</li>
					<li>
						<a href='#'>Контакти</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header
