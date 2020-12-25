import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './Planets.scss';
import Planet from './Planet';
class Index extends Component{
    constructor(){
        super();
        th
        is.state={
            allPlanets : []
        }
    }
    componentDidMount(){
        axios.get("https://assignment-machstatz.herokuapp.com/planet")
        .then(res=>{
            this.setState({
                allPlanets : res.data
            })
        })
        .catch(error=>{
            console.log(error);
        })
    }
    addFavourite = (index,favourite)=>{
        let planets = this.state.allPlanets;
        planets[index].isFavourite = favourite;
        this.setState({
            allPlanets : planets
        })
    }
    render(){
        return(
            <Fragment>
                <div className="planets-container">
                    <div className="title">All Planets</div>
                    <div className="all-planets">
                        {
                            this.state.allPlanets && this.state.allPlanets.map((planet,index)=>{
                                return !planet?.isFavourite && <Planet planet={planet} index = {index} addFavourite={this.addFavourite}/>
                            })
                        }
                    </div>
                </div>
                <div className="planets-container">
                    <div className="title">Favourite Planets</div>
                    <div className="all-planets">
                        {
                            this.state.allPlanets && this.state.allPlanets.map((planet,index)=>{
                                return planet?.isFavourite && <Planet planet={planet} index = {index} addFavourite={this.addFavourite}/>
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Index;