import { Paper } from '@mui/material'
import React from 'react'
import './Total.scss'

export default function Total({meal, totalmeal, totalcountprice}) {

  const style = {
    paper: {display: 'flex',
            flexDirection: 'column', 
            minHeight: '100px'}
  }


  return (
    <div>  
        <div className="total">
                <div className="total__dish">
                  <Paper style={style.paper} elevation={3} >
                    <div className='total__dish-nav'>Dania:</div>
                    <div className='total__dish-meal'>
                      {
                      totalmeal.length === 0 ? 
                      <div className='total__dish-meal--nomeal'>Aktualnie brak zamówienia</div> :
                      totalmeal.toString()
                      } 
                    </div>
                  </Paper>
                  <div className="total__dish-price">Do zapłaty: {totalcountprice} zł</div>
                </div>
        </div>   
    </div>
  )
}
