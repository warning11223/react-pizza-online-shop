import React, {useState} from "react";


function Categories({items, click}) {
    const [state, setState] = useState({
        activeItem: null,
    })

    let onSelectItem = (index) => {
        setState({
            activeItem: index,
        })
    }

    return (
        <div className="categories">
            <ul>
                <li
                    onClick={() => onSelectItem(null)}
                    className={state.activeItem === null ? 'active' : ''}
                >
                    Все
                </li>
                {items.map((name,index) =>
                    <li
                        className={state.activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)}
                        key={index}>{name}
                    </li>)}
            </ul>
        </div>
    )
}

export default Categories