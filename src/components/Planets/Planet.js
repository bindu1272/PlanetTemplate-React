import React, { Component } from 'react';
class Planet extends Component {
    constructor(props) {
        super(props);
        this.state={
            planets : {
                mercury : "https://nineplanets.org/wp-content/uploads/2019/09/mercury.png",
                jupiter : "https://www.wamc.org/sites/wamc/files/201912/jupiter__image_taken_by_nasa_s_hubble_space_telescope__june_2019_-_edited.jpg",
                venus : "https://upload.wikimedia.org/wikipedia/commons/a/a9/PIA23791-Venus-NewlyProcessedView-20200608.jpg",
                earth : "https://mediad.publicbroadcasting.net/p/shared/npr/styles/x_large/nprshared/201805/339823601.jpg",
                mars : "https://www.treehugger.com/thmb/rT1CBggFcgbGb4oQmw4eIbgAMR0=/1000x893/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__MarsTrueColorOSIRISRosettaSpacecraft2007-56b72b3940224d2c8b845f7a3e47d99d.jpg",
                ceres : "https://cdn.mos.cms.futurecdn.net/7yojSnrjnEZHoXtA2XLHxF.jpg",
                saturn : "https://c.files.bbci.co.uk/17073/production/_105232349_saturn.jpg",
                pluto : "https://thumbs.dreamstime.com/b/dwarf-planet-pluto-view-space-nebula-image-elements-furnished-nasa-170639349.jpg",
                haumea : "https://image.shutterstock.com/image-illustration/haumea-planet-space-3d-rendering-260nw-1747478162.jpg",
                makemake : "https://solarsystem.nasa.gov/system/resources/list_images/2374_makemake_th.jpg",
                eris : "https://solarsystem.nasa.gov/system/resources/list_images/2390_eris_th.jpg"
            }
        }
    }
    render() {
        return (
            <div className="planet">
                <img src={this.state.planets[this.props.planet.id]} className="planet-img" />
                <div className="planet-heading">
                    {this.props.planet.name}
                </div>
                {
                    this.props.planet.isFavourite?
                        <button className="planet-button" onClick = {()=>this.props.addFavourite(this.props.index,false)}>Remove Favourite</button>
                    :
                        <button className="planet-button" onClick = {()=>this.props.addFavourite(this.props.index,true)}>Add Favourite</button>
                }            
            </div>
        )
    }
}
export default Planet;