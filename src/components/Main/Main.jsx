import React, { useState } from 'react'
import './Main.scss'
import { Divider } from '@mui/material'
import Meal from './../../data/data.json'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function Main() {

    const [meal, setMeal] = useState(Meal)
    const [countMeal, setCountMeal] = useState(1)

    const addcount = (id) => {    
        if ([...meal].map(el => el.id) === id) {
            setCountMeal(countMeal + 1)
        }
        
        console.log(countMeal)
        
    }
  return (
    <div>
        <div className="main">
            <div className="main__box">
                {
                meal.map ((el) => {
                    return (
                       
                        <div key={el.id}>
                        <div className="main__box-header">{el.name_dish}</div>
                        <div className="main__box-nav">{el.ingredients}</div>
                        <div className='main__box-price'>{el.price} zł</div>
                        <div className="main__box-wrapper">
                        <RestaurantIcon />
                        <div>{countMeal}</div>
                        <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                        >
                        <Button
                        
                        >-</Button>
                        <Button
                        onClick={() => addcount(el.id)}
                        >+</Button>
                        </ButtonGroup>
                        </div>
                        
                        <Divider />
                        </div>
                       
                    )
                })
                }
            
            </div>
        </div>
    </div>
  )
}
