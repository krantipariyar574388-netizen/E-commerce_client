import SectionHeading from '../section-heading'
import CategoryList from './list'

const Categories = () => {
    return (
        <section className='px-20 py-10'>
            {/* heading */}
            <SectionHeading
                title='All Categories'
                subTitle='Discover our featured categories'
                link='#'
            />

            {/* list */}
            <CategoryList />

        </section>
    )
}

export default Categories