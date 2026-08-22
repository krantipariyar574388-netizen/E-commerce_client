import SectionHeading from '../section-heading'
import ProductList from './list'

const Products = () => {
    return (
        <section className='px-20 py-10'>
            {/* heading */}
            <SectionHeading
                title='Featured Products'
                subTitle='Discover our featured products'
                link='#'
            />

            {/* list */}
            <ProductList />

        </section>
    )
}

export default Products