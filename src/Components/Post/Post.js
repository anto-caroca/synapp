import React, { Component } from 'react';
import firebase from 'firebase';

class Post extends Component{

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
    renderUser (){

        if (this.state.user) {
           return(
               <div>{this.state.user.displayName}</div>
           )
        };
       
    }
    addPost = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let publication = this.refs.publication.value;

        if (publication===""){
            alert('escribe un mensaje')
        }

        if(this.state) {
            let data = {
                publication
            }
            datas.unshift(data);

        }else{
            let index = this.state.index;
            datas[index].publication = publication; 
        }

        this.setState({
            datas: datas,
        });

        this.refs.myForm.reset();

    }

deletePost = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
        datas: datas
    });

    this.refs.myForm.reset();
}
    render() {
        let datas = this.state.datas;
        return(
            <div className='App'>
                <h2>{this.state.title}</h2>
                <form ref='myForm' className='myForm'>
                    <input type='text' ref='publication' placeholder='título' className='formField' />
                    <button onClick={(e)=>this.addPost(e)} className='myButton'>Enviar</button>
                </form>
                <pre>
                    {datas.map((data, i) =>
                    <li key={i} className='myList'>
                    soy caro
                         {data.name}
                        <button onClick={()=>this.deletePost(i)} className='myListButton'>eliminar</button>
                    </li>
                    )}
                </pre>
            </div>
        );
    }  
}

export default Post;
