import React, {useState} from 'react';
import api from '../../services/api';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import converterMinutoParaHora from "../../utils/converterMinutoParaHora";
import getDiaSemana from "../../utils/getDiaSemana";

export interface Coach {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
  class_schedule: [{
    from: number;
    to: number;
    week_day: number;
  }]
}

interface CoachItemProps {
  coach: Coach;
}

const CoachItem: React.FC<CoachItemProps> = ({coach}) => {
  function createNewConnection() {
    api.post('connections', {
      coach_id: coach.id,
    });
  }

  return (
      <article className="coach-item">
        <header>
          <img src={coach.avatar} alt={coach.name}/>
          <div>
            <strong>{coach.name}</strong>
            <span>{coach.subject}</span>
          </div>
        </header>

        <p>{coach.bio}</p>

        <div>
          <br/>
          <strong>Horários</strong>

          {coach.class_schedule.map((horario) => {
            return <p>{converterMinutoParaHora(horario.from)} - {converterMinutoParaHora(horario.to)} no {getDiaSemana(horario.week_day)}</p>;
          })}
        </div>

        <footer>
          <p>Preço/Hora
            <strong>R$ {coach.cost}</strong>
          </p>

          <a
              target="_blank"
              onClick={createNewConnection}
              href={`https://wa.me/${coach.whatsapp}`}
          >
            <img src={whatsappIcon} alt="Whatsapp"/>
            Entrar em contato
          </a>
        </footer>
      </article>
  );
}

export default CoachItem;