import './skill.scss'

const Skill = ({ icon, title, desc }) => {
	return (
		<div className='card'>
			<img src={`src/assets/${icon}`} alt='' />
			<h3 className='card__title'>{title}</h3>
			<p className='card__desc'>{desc}</p>
		</div>
	)
}

export default Skill
