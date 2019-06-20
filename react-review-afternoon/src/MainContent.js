import React, {Component} from 'react'
import data from "./data.js"

class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            i: 0
        }
        this.handleNext = this.handleNext.bind(this)
        this.handlePrevious = this.handlePrevious.bind(this)
    }
    handleNext () {
        let iCopy = this.state.i + 1
        this.setState({i: iCopy})
    }

    handlePrevious() {
        this.setState({i: this.state.i -1})
    }
    
    render() {
        return (
            
            <div className="main-section-background">
            <div className= "main-display">
                <div className="counter">{ data[this.state.i].id}/25</div>
                <div className="text-container">
                <div className="name">{data[this.state.i].name.first}  { data[this.state.i].name.last}</div>
                <div className="categories"><strong>From: </strong>{data[this.state.i].city}, {data[this.state.i].country}</div>
                <div className="categories"><strong>Title:</strong> {data[this.state.i].title}</div>
                <div className="categories"><strong>Employer:</strong> {data[this.state.i].employer}</div>
                <br></br>
                <div className="favoriteMovies"><strong>Favorite Movies:</strong>  </div>
                    <div className="movies-container">
                    <div className="movies">1. {data[this.state.i].favoriteMovies[0]}  </div>
                    <div className="movies">2. {data[this.state.i].favoriteMovies[1]}  </div>
                    <div className="movies">3. {data[this.state.i].favoriteMovies[2]}  </div>
                    </div>
                </div>
                </div>
                    <footer>
                        <button className="previous" onClick={this.handlePrevious}>{`<`}Previous</button>
                        <button className="button"> Edit </button>
                        <button className="button"> Delete </button>
                        <button className="button"> New </button>
                        <button className="next" onClick={this.handleNext}>Next></button>
                        
                    </footer>
                
            </div>
        )
    }
}

export default MainContent 