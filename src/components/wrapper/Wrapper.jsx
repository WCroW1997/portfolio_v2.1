import Button from '../button/Button'
import './wrapper.scss'
import photo from '../../assets/profile-pic (1).png'

const Wrapper = () => {
	return (
		<section className='wrapper section'>
			<div className='wrapper__text'>
				<h2 className='wrapper__subtitle'>Андрій Залужний</h2>
				<h1 className='wrapper__title'>Front-end Developer, Фрілансер</h1>
				<p className='wrapper__desc'>
					Займаюсь створенням сайтів, невеликих web-додатків, налаштуванням CMS
					систем.
				</p>
				<Button>Замовити консультацію</Button>
			</div>
			<div className='wrapper__img'>
				<img src={photo} alt='' />
			</div>
		</section>
	)
}

export default Wrapper
