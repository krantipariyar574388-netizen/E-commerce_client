import SectionHeading from '../section-heading'
import NewArrivalProductsList from './list'

const NewProducts = () => {
    return (
        <section className='px-20 py-10'>
            {/* heading */}
            <SectionHeading
                title='All new arrival Products'
                subTitle='Discover our featured new arrival products'
                link='#'
            />

            {/* list */}
            <NewArrivalProductsList />

        </section>
    )
}

export default NewProducts