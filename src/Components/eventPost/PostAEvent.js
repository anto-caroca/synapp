import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

class Post extends Component{

   constructor(props) {
        super(props);
        this.state = {
            act: 0,
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
    fSubmit = (e) => {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let address = this.refs.address.value;

        if(this.state.act === 0) {
            let data = {
                name, address
            }
            datas.unshift(data);
        }else{
            let index = this.state.index;
            datas[index].name = name;
            datas[index].address = address;
        }

        this.setState({
            datas: datas,
            act: 0
        });

        this.refs.myForm.reset();

    }

fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
        datas: datas
    });

    this.refs.myForm.reset();

}

fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.address.value = data.address;

    this.setState({
        act:1,
        index:i
    });

    this.refs.name.focus();
}

    render() {
        let datas = this.state.datas;
        return(
            <div className='App'>
                <h2>{this.state.title}</h2>
                <form ref='myForm' className='myForm'>
                    <input type='text' ref='name' placeholder='título' className='formField' />
                    <input type='text' ref='address' placeholder='mensaje' className='formField' />
                    <button onClick={(e)=>this.fSubmit(e)} className='myButton'>Enviar</button>
                </form>
                <pre>
                    {datas.map((data, i) =>
                    <li key={i} className='myList'>
                         {data.name}, {data.address}
                        <button onClick={()=>this.fRemove(i)} className='myListButton'>eliminar</button>
                        <button onClick={()=>this.fEdit(i)} className='myLIstButton'>editar</button>
                    </li>
                    )}
                </pre>
            </div>
        );
    }  
}

export default Post;
