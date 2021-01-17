import React from 'react';
import {Categories, Button, SortPopup, PizzaBlock} from '../components/index'



function Home(props) {

    return (
            <div className="content">
                <div className="container">
                    <div className="content__top">

                        <Categories click={(name) => console.log(name)} items={['Мясные','Вегетарианские', 'Гриль', 'Острые']}/>

                        <SortPopup items={[
                            {name: 'популярности', type: 'popular'},
                            {name: 'цене', type: 'price'},
                            {name: 'алфавиту', type: 'alphabet'}
                            ]}/>

                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            props.items.map(obj => <PizzaBlock
                                key={obj.id}
                                {...obj}
                            />)
                        }

                    </div>
                </div>
            </div>
    );
}

export default Home;
