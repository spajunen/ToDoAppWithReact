import React, {Component} from 'react';
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
//import axios from 'axios';
import {getQuotes,lisaaQuote, poistaQuote, muutaQuote} from "./serviceclient";

// const apiUrl = "/api/quotes"

// var data = [{
//     author: "Chinese Proverb",
//     quotetext: "The best time to plant a tree was 20 years ago. The second best time is now.",
//     id: "1"},
//     {author: "John Lennon", quotetext: "Life is what happens to you while you’re busy making other plans.", id: "2"},
//     {author: "Buddha", quotetext: "The mind is everything. What you think you become.", id: 3},
//     {author: "Oprah Winfrey", quotetext: "You become what you believe.", id: 4}];


class TaskBox extends Component {


    // state = {
    //     quotes: data
    // };
    state = {
        quotes: []
    };
    // componentDidMount() {
    //     axios.get(apiUrl)
    //         .then(res => {
    //             const quotes = res.data;
    //             this.setState({ quotes });
    //         })
    // }

    componentDidMount() {
        this.lataa();
        // lisaaQuote((uusiquote) =>
        //     this.setState({quotes:this.state.quotes.concat(uusiquote)})
        // );
        // poistaQuote((id) =>
        //     this.setState({quotes: this.state.quotes.filter(quote => quote.id !== id)})
        // );
    }

    lataa=()=>{
        getQuotes(data =>
            this.setState({quotes:data})
        );
    };
    uusi = (uusisanonta) => {
        lisaaQuote(uusisanonta)
            .then((response)=> {
                this.lataa();
            });

    };
    poista = (id) => {
        poistaQuote(id)
            .then((response)=> {
                this.lataa();
            });
    };

    muuta = (id, muutettusanonta) => {
        // var loytyyko = false;
        // for(var i = 0; i < this.state.quotes.length; i++){
        //    if(id === 35){
        //        loytyyko = true;
        //    }
        // }
        // if(loytyyko){
        muutaQuote(id, muutettusanonta)
            .then((response)=>{
                this.lataa();
            });
        // }else{
        //     alert("Id on väärä!")
        // }

    };






    // lisaaQuote = (uusiquote) => {
    //     const quoteWithId = {
    //         ...uusiquote,
    //         id: this.state.quotes.length+1
    //     };
    //     this.setState({quotes: this.state.quotes.concat(quoteWithId)})
    // };

    // poistaQuote = id => {
    //     console.log('poistetaan id ', id);
    //     this.setState({quotes: this.state.quotes.filter(quote => quote.id !== id)})
    // };


    render() {
        return (
            <div className={"taulukko"}>
                <TaskForm add={this.uusi} update={this.muuta}/>
                <h3>Tasks added: {this.state.quotes.length}</h3>
                <TaskList poista={this.poista} quote={this.state.quotes}/>
            </div>
        );
    }
}

export default TaskBox;