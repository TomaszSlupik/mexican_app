import React from 'react'
import './Total.scss'

export default function Total({meal, totalmeal}) {

  return (
    <div>  
        <div className="total">
                <div className="total__dish">
                  {meal.map (el => el.price)}
                  {totalmeal.toString()}
                </div>
        </div>   
    </div>
  )
}
