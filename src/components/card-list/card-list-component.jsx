import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({ monsters }) => (
        <div className='card-list'>
            {monsters.map((monster) => {
                return(
                < Card monster={monster} key={monster.id}/>
                );
            })}
        </div>
);


export default CardList;
// {monsters.map((monster) => <h1 key={monster.id}>{monster.name}</h1>)}
