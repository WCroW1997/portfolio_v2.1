import Skill from '../skill/Skill'
import './skills.scss'

const mySkills = [
	{
		id: 1,
		title: 'Створення персональних сайтів',
		desc: 'Зверстаю сайт різної складності за вашим готовим макетом. Адаптивність та кросбраузерність додається.',
		icon: 'custom.svg',
	},
	{
		id: 2,
		title: 'Розробка React застосунків',
		desc: 'Створення веб застосунків засобами одного з найпопулярніших фремворків - React.',
		icon: 'reactImg.svg',
	},
	{
		id: 3,
		title: 'Оптимізація сайтів',
		desc: 'Покращую швидкість завантаження сайтів, редагую готові розділи, виправляю непрацюючі частини коду.',
		icon: 'code.svg',
	},
	{
		id: 4,
		title: 'Встановлення та налаштування Wordpress',
		desc: 'Створю з нуля, або налаштую готову тему для CMS Wordpress. Додам потрібні розширення та поясню як з ним працювати.',
		icon: 'wordpress.svg',
	},
	{
		id: 5,
		title: 'Створення сайтів на конструкторах',
		desc: 'За готовим макетом створю сайт на конструкторах сайтів: Webflow, Wix, Weblium та інших',
		icon: 'website.svg',
	},
	{
		id: 6,
		title: 'Технічна підтримка',
		desc: 'Безкоштовні консультації по сайту, невеликі правки, додавання нового функціоналу зі знижкою протягом 3 місяців.',
		icon: 'setting.svg',
	},
]

const Skills = () => {
	return (
		<section className='skills section'>
			<h2 className='section__title skills__title'>Мої послуги</h2>
			<div className='skills__zone'>
				{mySkills.map((skill) => (
					<Skill key={skill.id} {...skill} />
				))}
			</div>
		</section>
	)
}

export default Skills
