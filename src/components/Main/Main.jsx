import React, { useState } from 'react'
import './Main.scss'
import { Divider } from '@mui/material'
import Meal from './../../data/data.json'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Total from '../Total/Total';
import Header from '../Header/Header';


export default function Main() {

    const [meal, setMeal] = useState(Meal)
    const [countMealBurito, setCountMeal] = useState(0)
    const [countMealQuesadilla, setCountMealQuesadilla] = useState(0)


    const [totalmeal, setTotalMeal] = useState([])

    const addcount = (id) => { 
        if (id === 1) {
            setCountMeal(countMealBurito + 1)
        }
        else if (id === 2) {
            setCountMealQuesadilla(countMealQuesadilla + 1)
        }
        
        const copymeal = [...meal]

        const clickmeal = copymeal.filter(el => el.id === id)
        const clickmealname = clickmeal.map (el => el.name_dish)
        
        console.log(clickmealname)
        if (countMealBurito >= 0) {
            totalmeal.push(clickmealname)
        }
        console.log(totalmeal)
    }

    const subtractcount = (id) => { 
        setCountMeal(countMealBurito - 1)
    }

  return (
    <div>
         <Header meal={meal} totalmeal={totalmeal}/>
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
                        {el.id === 1 ? (< Button/>) :  1}
                        <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                        >
                        <Button
                        onClick={() => subtractcount()}
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
                  <div className="buritto">Ilość:{countMealBurito} </div>
                  <div className="Quesadilla">Ilość:{countMealQuesadilla} </div>
            </div>
        </div>
    </div>
  )
}
