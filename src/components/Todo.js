import React, { Component } from 'react';
import { connect } from 'react-redux'
import { StudentPostAction,StudentUpdateAction,StudentUpdateAction2,UpdateBtn ,InpVal,remove,removeall} from '../actions/StudentPostAction';
class Todo extends Component {
  
    handleChange = (e) => {
        this.props.dispatch(InpVal(e.target.value )) 
    }
    submit = () => {
    
     this.props.dispatch(StudentPostAction(this.props.inpVal));
    }
    edit = (v,k) => {
    
        this.props.dispatch(UpdateBtn(k));
        this.props.dispatch(StudentUpdateAction(v,k))
  
    }
    update=()=>{
      this.props.dispatch(StudentUpdateAction2(this.props.inpVal,this.props.updateVal))
    }

    remove = (v,k) => {
     
        this.props.dispatch(remove(v,k))
    }
    removeall=()=>{
        this.props.dispatch(removeall())
    }
    render() {
     
        return (
            <div>
                <h1>Todo App </h1>
                <div>
                <form>
                <div className="form-group">
                    
                    <input type="text" className="form-control" placeholder="enter student" value={this.props.inpVal} onChange={this.handleChange} />
                    </div>
                </form>
                    {this.props.btn?
                    <button className="btn btn-xs btn-primary" onClick={() => this.submit()}>submit</button>
                    :<button className="btn btn-xs btn-success" onClick={() => this.update()}>update</button>}
                <button className="btn btn-xs btn-danger" onClick={() => this.removeall()}>remove all</button>
                
                {this.props.err?<p>something to enter</p>:
                     this.props.getStudent&&this.props.getStudent.map((item, index) =>(
                    <ul key={index}>
                        <li>  {item}
                        <button className="btn btn-xs btn-warning" onClick={() => this.edit(index,item)}>change</button>
                        <button className="btn btn-xs btn-info" onClick={() => this.remove(index,item)}>remove</button>
                        </li>
                    </ul>
                )
               )}
                
               
                </div>
               
           
            </div>


        )
    }
}
const mapStateToProps = (state) => {
  
    return {
        getStudent: state.stuPostReducer.studentPostData,
        inpVal:state.stuPostReducer.studentName,
        btn:state.stuPostReducer.btn,
        updateVal:state.stuPostReducer.updateVal,
        err:state.stuPostReducer.err
     
    }
}
export default connect(mapStateToProps)(Todo);