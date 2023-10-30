import './App.scss'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'
import Header from './components/header/Header'
import Review from './components/review/Review'
import Skills from './components/skills/skills'
import Work from './components/work/Work'
import Wrapper from './components/wrapper/Wrapper'

function App() {
	return (
		<div className='container'>
			<Header />
			<Wrapper />
			<Skills />
			<Work />
			<Review />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
