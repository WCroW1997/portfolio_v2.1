import './work.scss'

const category = [
	{
		key: 'all',
		name: 'Всі роботи',
	},
	{
		key: 'app',
		name: 'Застосунки',
	},
	{
		key: 'sites',
		name: 'Сайти',
	},
	{
		key: 'wp',
		name: 'Wordpress',
	},
	{
		key: 'build',
		name: 'Конструктори',
	},
]

const Work = () => {
	return (
		<section className='work section'>
			<h2 className='section__title work__title'>Мої роботи</h2>
			<div className='work__filter'>
				{category.map((cate) => (
					<div className='work__category active' key={cate.key}>
						{cate.name}
					</div>
				))}
			</div>
		</section>
	)
}

export default Work
