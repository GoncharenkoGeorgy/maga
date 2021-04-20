import React, { useContext } from 'react';
import Thing from '../Thing/Thing';
import './Things.css';

const Things = (props) => {

  const { things } = props;

  return (

      <section className="profile">
        <div className="profile__content">
            Список умных вещей ??/
        </div>
        <button className="button-add">Добавить новый предмет</button>
        <table className='posts__table'>
          <tbody>
            <tr>
              <th className='posts__head_slot'>Фото предмета</th>
              <th className='posts__head_slot'>Название предмета</th>
            </tr>
            {things.map((thing, i) => (
              <Thing key={i} thing={thing} things={things} />
            ))}
          </tbody>
        </table>
      </section>

  );
}

export default Things;