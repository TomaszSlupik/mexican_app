import React from 'react'
import './Headerbox.scss'
import Wave from 'react-wavify'

export default function Headerbox() {

    const style = {
        wave: {
            position: 'absolute', bottom: '-1%', height: '100px'
        }
    }

  return (
    <div className='headerbox'>
        <div className="headerbox__img">
        <Wave 
        style={style.wave}
        fill='#383941'
        paused={false}
        options={{
          height: 20,
          amplitude: 20,
          speed: 0.25,
          points: 3
        }}
        />
        <div className="headerbox__img-wrapper">
            <div className="headerbox__img-wrapper--text">Pyszne jedzenie, dostarczone do Ciebie!</div>
            <div className="headerbox__img-wrapper--nav">Wybierz swój ulubiony posiłek z dostępnych w menu, a my przywieziemy Ci do domu. 
            Wszytskie dania są przygotowywane na czas, z wysokiej jakości składników od najlepszego szefa kuchni.</div>
        </div>
        </div>
    </div>
  )
}
