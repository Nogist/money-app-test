import React from 'react';
import gift from '../../assets/gift.png';
import stars from '../../assets/stars.png';
import alert from '../../assets/notification.png';
import blast from '../../assets/blast.png';
import { ImStopwatch } from 'react-icons/im';

const Notfification:React.FC = () => {
  return (
    <div className='dashboard__alert'>
      <div className='dashboard__alert__body'>
        <div className='dashboard__alert__header'>
          <span>
            <ImStopwatch />
            <p>Coming Soon</p>
          </span>
        </div>
        <div className='dashboard__alert__section'>
          <span>
            <div className='dash__img'>
              <img src={gift} alt="alert" />
            </div>
            <div  className='dash__dashes'>
              <p className='long__dashes'></p>
              <p></p>
            </div>
          </span>
          <span>
            <div className='dash__img'>
              <img src={stars} alt="alert" />
            </div>
            <div  className='dash__dashes'>
              <p className='long__dashes'></p>
              <p></p>
            </div>
          </span>
          <span>
            <div className='dash__img'>
              <img src={blast} alt="alert" />
            </div>
            <div  className='dash__dashes'>
              <p className='long__dashes'></p>
              <p></p>
            </div>
          </span>
        </div>
        <div className='dashboard__alert__footer'>
          <div>
            <img src={alert} alt="alert" />
          </div>
          <h2>Receive notifcations about your rider performance, efficiency reviews and a lot more</h2>
        </div>
      </div>
    </div>
  )
}

export default Notfification