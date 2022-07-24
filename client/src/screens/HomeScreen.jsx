import React,{useEffect} from 'react';
// import AllPizza from "../pizza-data";
import {useDispatch,useSelector} from 'react-redux'
import {Container ,Row , Col} from "react-router-bootstrap";
import Pizza from "../components/Pizza";
import {getAllPizzas} from '../actions/pizzaAction'

const HomeScreen =  () => {
        const dispatch = useDispatch();
        const pizzastate = useSelector( (state) => state.getAllPizzaReducer);
        const { loading , pizzas , error } = pizzastate;
        // console.log(pizzas);
        useEffect(() => {
          dispatch(getAllPizzas());
        } ,[dispatch]);
      return 
      (
        <>
        <Container>
        {
          loading ? (<h1>loading...</h1>)
                  : error ? (<h1>Error while fetching</h1>)
                  :(<Row>
              {pizzas.map((pizza) =>(
                  <Col md={4}>
                      <Pizza pizza={pizza} />
                  </Col>
              ))}
          </Row>)
          }
         
          
        </Container>
        </>
  );    
}

export default HomeScreen;
