// create react component with nests
// in regards to movie ranking with ability
// to add movies to list and rearrange movie
// up and down list

class MovieApp extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            movies: ['Rango', 'Rango 2']
        }

        
        this.handleRemove = this.handleRemove.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleMoveUp = this.handleMoveUp.bind(this);
        this.handleMoveDown = this.handleMoveDown.bind(this);
        
    }

    handleAdd(newMovie) {

        if(this.state.movies.indexOf(newMovie) != -1){
            return
        } else if (newMovie === ''){
            return
        }

        this.setState((prevState) => {
            return {
                movies: prevState.movies.concat([newMovie])
            }
        })
    }

    handleRemove(removed) {
        let found = this.state.movies.indexOf(removed);
        this.state.movies.splice(found, 1);
        this.setState((prevState) => {
            return{
                movies: prevState.movies
            };
        });
    }

    handleMoveUp(move) {

        if(this.state.movies.indexOf(move) === 0) {
            return 
        }

        let targeted = this.state.movies.indexOf(move);
        let copy = this.state.movies[targeted - 1];
        this.state.movies[targeted] = copy;
        this.state.movies[targeted - 1] = move;
        this.setState((prevState) => {
            return{
                movies: prevState.movies
            };
        });

    } 

    handleMoveDown(move) {

        if(this.state.movies.indexOf(move) === this.state.movies.length - 1){
            return
        }

        let targeted = this.state.movies.indexOf(move);
        let copy = this.state.movies[targeted + 1];
        this.state.movies[targeted] = copy;
        this.state.movies[targeted + 1] = move;
        for(let x = 0; x < this.state.movies.length; x++) {
            console.log(x + " place " + this.state.movies[x]);
        }
        this.setState((prevState) => {
            return{
                movies: prevState.movies
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Movie Ranker</h1>
                <h3>Create your own movie ranking</h3>
                <p>********************</p>
                <MovieList movies={this.state.movies} handleRemove={this.handleRemove} handleMoveUp={this.handleMoveUp} handleMoveDown={this.handleMoveDown}/>
                <AddMovie handleAdd={this.handleAdd}/>
            </div>
        );
    }

}

class MovieList extends React.Component {

    constructor(props) {
        super(props);

        this.remove = this.remove.bind(this);
    }

    remove(removed) {
        this.props.handleRemove(removed);
        console.log(removed);
    }

    render() {

        let place = 0;

        return (
            <ol>
            {
                
                this.props.movies.map((movie) => {
                return <div key={movie}><li>{movie}</li><button onClick={() => this.props.handleMoveUp(movie)}>+</button><button onClick={() => this.props.handleMoveDown(movie)}>-</button><button onClick={() => this.remove(movie)}>x</button></div>
                })
            }
            </ol>

        )
        
    }
}

class AddMovie extends React.Component {
    constructor(props) {
        super(props);

        this.addMovie = this.addMovie.bind(this);
    }

    addMovie(e) {
        e.preventDefault();
        let newMovie = e.target.elements.newMovie.value;
        let error = this.props.handleAdd(newMovie);
        console.log("checker");
    }


    render() {
        return(
            <div>
                <form onSubmit={this.addMovie}>
                    <input type="text" name="newMovie" />
                    <button>Add to list</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<MovieApp />, document.getElementById('app'));