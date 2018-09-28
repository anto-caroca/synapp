import React, { Component } from 'react';
import firebase from 'firebase';
import LikeButton from '../../Components/misc/Likes'

class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: '',
            datas: []
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ user });
        });
    }
    renderUser() {
        if (this.state.user) {
            return (
                <div>{this.state.user.displayName}</div>
            )
        };
    }
    addPost = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let publication = this.refs.publication.value;
        var HoraActual = new Date();
        let year = HoraActual.getFullYear().toString();
        let month = HoraActual.getMonth().toString();
        let dia = HoraActual.getDate().toString();
        let hora = HoraActual.getHours().toString(); // rescatamos la hora
        let minutos = HoraActual.getMinutes().toString(); // y los minutos

        if (minutos < 10) { 
            minutos = "0" + minutos;
        }

        if (publication === "") {
            return alert('Este campo no puede estar vacío')
        }

        if (this.state) {
            let data = {
                publication, dia, month, year, hora, minutos
            }
            datas.unshift(data);
            
            
        } else {
            let index = this.state.index;
            datas[index].publication = publication;   
        }

        this.setState({
            datas: datas
            
        });
        

        this.refs.formulario.reset();

    }

    deletePost = (i) => {
        let datas = this.state.datas;
        datas.splice(i, 1);
        this.setState({
            datas: datas
        });

        this.refs.formulario.reset();
    }
    render() {
        let datas = this.state.datas;
        return (
            <div>
                <div className='card White'>
                    <h2>{this.state.title}</h2>
                    <form ref='formulario' className='signForm'>
                        <input type='text' ref='publication' placeholder='¿Qué estás pensando?'/>
                        <button onClick={(e) => this.addPost(e)} className='myButton'>Enviar</button>
                    </form>
                </div>
                <div>
                    {datas.map((data, i) =>
                        <div key={i} className="card white signForm">
                            <div className="card-title">
                                Carolina Torres Durán
                            </div>
                            <div className="postdate"> {data.dia}/ {data.month} /{data.year} a las {data.hora}:{data.minutos}</div>
                            <div className="postcontent"> {data.publication}</div>
                            <div className="row">
                            <hr />
                                <div className="col s6">
                                    <LikeButton />
                                </div>
                                <div className="col s6 right-align">
                                    <button onClick={() => this.deletePost(i)}><i class="far fa-trash-alt"></i></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default Post;
