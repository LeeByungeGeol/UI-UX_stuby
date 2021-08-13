import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
    render() {
      const { todos, onRemove, onToggle} = this.props;
  
      const todoList = todos.map(
        ({id, text,checked}) => (
          <TodoItem
            id={id}
            text={text}
            checked={checked}
            onaRemove={onRemove}
            onaToggle={onToggle}
            key={id}
          />
        )
      );
  
      return (
        <div>
          {todoList}    
        </div>
      );
    }
  }

export default TodoItemList;