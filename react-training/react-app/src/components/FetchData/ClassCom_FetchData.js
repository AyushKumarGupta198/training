import React,{Component} from 'react'

class ClassCom_FetchData extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
            loading:false,
            trigger:0,
        };
    };

    fetchJoke=async ()=>{
        try {
           this.setState({loading:true});
           let res=await fetch("https://api.chucknorris.io/jokes/random");
           let result=await res.json();
           this.setState({data:result.value,loading:false});
        } catch (error) {
            this.setState({loading:false})
            console.log(error);
        }
    };

    componentDidMount(){
        console.log("class_component mounted");
        this.fetchJoke();
    };

    componentDidUpdate(prevProps,prevState){
        if(prevState.trigger !== this.state.trigger){
            console.log("class_component updated");
            this.fetchJoke();
        }
    };

    componentWillUnmount(){
        console.log("class_component unmounted")
    };

    handleNewJoke=()=>{
        this.setState((prevState)=>({trigger:prevState.trigger +1}));
    };

    render(){
        return(
            <>
            <h1>today's joke</h1>
            <h2>{this.state.loading?"Loading...":this.state.data}</h2>
            <button onClick={this.handleNewJoke}>new joke</button>
            </>
        )
    };
}

export default ClassCom_FetchData;