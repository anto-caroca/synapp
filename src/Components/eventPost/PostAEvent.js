import React, { Component } from 'react';
import firebase from 'firebase';
import CheckButton from '../../Components/misc/check'

class PostAEvent extends Component {

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
        let title = this.refs.tituloEvento.value;
        let place = this.refs.lugarEvento.value;
        let day = this.refs.fechaEvento.value;
        let event = this.refs.descripcion.value;
        

        if (event === "") {
           return alert('escribe un mensaje')
            
        }

        if (this.state) {
            let data = {
                title,place,day,event
            }
            datas.unshift(data);
            
            
        } else {
            let index = this.state.index;
            datas[index].title = title;   
            datas[index].place = place;
            datas[index].day = day;
            datas[index].event = event;
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
                    <h5 className="signForm">Publicar un Evento</h5>
                    <form ref='formulario' className='signForm'>
                        <input type='text' ref='tituloEvento' placeholder='Nombre Evento'/>
                        <input type='text' ref='lugarEvento' placeholder='¿Dónde es?'/>
                        <input type='date' ref='fechaEvento' label="¿Cuándo es?"/>
                        <input type='text' ref='descripcion' placeholder='¿De que trata?'/>
                        <button onClick={(e) => this.addPost(e)} className='myButton'>Enviar</button>
                    </form>
                </div>
                <div>
                    {datas.map((data, i) =>
                        <div key={i} className="card white signForm">
                            <div className="card-title">
                            {data.title}
                            </div>
                            <div className="postdate"> Dónde: {data.place}/ Cuándo: {data.day}</div>
                            <div className="postcontent"> {data.event}</div>
                            <div className="row">
                            <hr />
                                <div className="col s6">
                                    <CheckButton />
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

export default PostAEvent;
