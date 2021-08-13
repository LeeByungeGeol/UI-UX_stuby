import React, {Component} from "react";
import TodoListTemplate from "./components/TodoListTemplate";
import Form from "./components/Form";
import TodoItemList from "./components/TodoItemList";

class App extends Component {

  id = 3 // 이미 0,1,2 가 존재하므로 3으로 설정

  state = {
    input: '',
    todos: [
      {id:0, text:"리액트 정리하기",checked:false},
      {id:1, text:"프로젝트 정리",checked:false},
      {id:2, text:"이력서 쓰기-배열",checked:false}
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input 의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat 을 사용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }
 
  handleRemove = (id) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  handleToggle = (id) =>{
    const { todos} =this.state;
    //매개변수로 받은 id가 몇번째 아이템인지 찾기
    const index= todos.findIndex(todo => todo.id === id);
    console.log(index)
    const selected = todos[index];
    console.log(selected);
    
    //배열 복사하기 spread연산자 ...
    const copyTodos = [...todos];
    console.log(copyTodos);
    copyTodos[index]={
     ...selected,
     checked:!selected.checked
    }
    console.log(copyTodos);
    this.setState({
      todos:copyTodos
    })
  }

  render() {
    const { input, todos } = this.state;
   
    return (
      <TodoListTemplate form={(
        <Form 
          value={input}
          onaChange={this.handleChange}
          onaCreate={this.handleCreate}
        />
      )}>
        <TodoItemList 
          todos={todos} 
          onRemove={this.handleRemove}
          onToggle={this.handleToggle}
          />
      </TodoListTemplate>
    );
  }
}

export default App;
