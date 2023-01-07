import React, {useState } from 'react'
import './Main.scss'
import { Divider } from '@mui/material'
import Meal from './../../data/data.json'
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Header from '../Header/Header';
import Buritto from '../Meal/Buritto';
import Quesadilla from '../Meal/Quesadilla';
import Guacamole from '../Meal/Guacamole'
import Chiliconcarne from '../Meal/Chiliconcarne';
import Tacos from '../Meal/Tacos';

export default function Main() {

    const [meal, setMeal] = useState(Meal)
    const [countMealBuritto, setCountMeal] = useState(0)
    const [countMealQuesadilla, setCountMealQuesadilla] = useState(0)
    const [countMealGuacamole, setCountMealGuacamole] = useState(0)
    const [countMealChiliconcarne, setCountMealChiliconcarne] = useState(0)
    const [countMealTacos, setCountMealTacos] = useState(0)
    const [totalcount, setTotalCount] = useState("0")
    const [totalmeal, setTotalMeal] = useState([])
    const [totalcountprice, setTotalCountPrice] = useState("0")
  
        const subtractcount = (id) => { 
        if (id === 1) {
            setCountMeal(countMealBuritto - 1)
        }
        else if (id === 2) {
            setCountMealQuesadilla(countMealQuesadilla - 1) 
        }
        else if (id === 3) {
            setCountMealGuacamole(countMealGuacamole - 1)
        }
        else if (id === 4) {
            setCountMealChiliconcarne(countMealChiliconcarne - 1)
        }
        else if (id === 5) {
            setCountMealTacos(countMealTacos - 1)
        }
        countallMeal()
    }


    const addcount = (id) => { 
        if (id === 1) {
            setCountMeal(countMealBuritto + 1)  
        }
        else if (id === 2) {
            setCountMealQuesadilla(countMealQuesadilla + 1)
        }
        else if (id === 3) {
            setCountMealGuacamole(countMealGuacamole + 1)
        }
        else if (id === 4) {
            setCountMealChiliconcarne(countMealChiliconcarne + 1)
        }
        else if (id === 5) {
            setCountMealTacos(countMealTacos + 1)
        }
          
        const copymeal = [...meal]

        const clickmeal = copymeal.filter(el => el.id === id)
        const clickmealname = clickmeal.map (el => el.name_dish)
        
   
        if (countMealBuritto >= 0) {
            totalmeal.push(clickmealname)
        }
       
        countallMeal()
        countallTotalPrice()
    }


    const countallMeal = () => {
        setTotalCount(totalmeal.length)
       
    }

    const countallTotalPrice = () => {
        const totalmeal_tostring = totalmeal.toString()
        const arraywithtotalmeal = totalmeal_tostring.split(",")
        const objectmealtotal = {}

        arraywithtotalmeal.forEach(el => {
            objectmealtotal[el] = (objectmealtotal[el] || 0) + 1;
        })

        let Burito = (objectmealtotal.Burito || 0 ) * 10
        let Quesadilla = (objectmealtotal.Quesadilla || 0) * 22
        let Guacamole = (objectmealtotal.Guacamole || 0) * 17
        let Chiliconcarne = (objectmealtotal["Chili con carne"] || 0) * 25
        let Tacos = (objectmealtotal.Tacos || 0) * 18  
        setTotalCountPrice (Burito + Quesadilla + Guacamole + Chiliconcarne + Tacos)  
    }

    const style = {
        btn: {margin: '0.2em 0.3em'}
    }

  return (
    <div>
         <Header meal={meal} totalmeal={totalmeal} totalcount={totalcount} totalcountprice={totalcountprice}/>
        <div className="main">
            <div className="main__box">
                {
                meal.map ((el) => {
                    return (
                       
                        <div key={el.id}>
                        <div className="main__box-header">{el.name_dish}</div>
                        <div className='main__box-img'>
                            
                                <img className="main__box-img--picture" src={process.env.PUBLIC_URL + el.picture} alt="Burito - danie meksykańskie"/>
                           
                        </div>
                        <div className="main__box-nav">{el.ingredients}</div>
                        <div className='main__box-price'>{el.price} zł</div>
                        <div className="main__box-wrapper">
                        <RestaurantIcon />
                        <div>
                            {el.id === 1 ? (< Buritto countMealBuritto={countMealBuritto}/>) : el.id === 2 ? (<Quesadilla countMealQuesadilla={countMealQuesadilla}/>) 
                        : el.id === 3 ? (<Guacamole countMealGuacamole={countMealGuacamole}/>)    
                        : el.id === 4 ? (<Chiliconcarne countMealChiliconcarne={countMealChiliconcarne}/>)   
                        : el.id === 5 ? (<Tacos countMealTacos={countMealTacos}/>)  
                        : (
                        <span>Chwilowo niedostępne</span>
                        )} 
                        </div> 
                        <ButtonGroup
                        style={style.btn}
                        disableElevation
                        variant="contained"
                        aria-label="Disabled elevation buttons"
                        >
                        <Button
                        onClick={() => subtractcount(el.id)}
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
