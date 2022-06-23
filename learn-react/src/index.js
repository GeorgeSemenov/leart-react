import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {//Т.к. данный компонент не содержит состояния и у него нет других методов
  //кроме метод render, то его можно сделать функциональным компонентом 
  //(он больше не является расширением React.Component и сам метот render удалён, теперь функция просто возвращяет JSX разметку)
  return (
    <button 
      className="square" 
      onClick={props.onClick} 
      >
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  handleClick(i){
    const squares = this.state.squares.slice();//Создаём копию массива squares из конструктора(это состояние), но зачем мы создаём копию? Это будет объясненно в графе why immutability is important
    if(calculateWinner(squares) || squares[i]){return}//Если победитель уже найден или ячейка уже заполненна, то функция не сработает.
    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      squares:squares,
      xIsNext : !this.state.xIsNext,
    })
    console.log(`state = ${squares}`);
  }
  renderSquare(i) {
    return (
      <Square 
        value ={this.pops.squares[i]} //мы всегда передаём функцию(фигурные скобочки), имя этой фукнции станет именем свойства в props, а значением этого свойства будет то что указанно в фигурных скобочках
        onClick = {()=>this.pops.onClick(i)}//props.onClick см render функцию элемента Square
      />
      );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if(winner){status = `Winner is bomj ${winner}`}
    else{status = `Next player: ${this.state.xIsNext? 'X' : 'O'}`;}

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props){
    super(props);//Все реакт компоненты должны иметь супер конструктор.
    this.state= {
      history:[
        {squares: Array(9).fill(null),}
      ],
      xIsNext: true,
    };
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {//Принимает массив и возвращает метку победителя(если такой есть)
  const lines = [ // cписок выгрышных линий (3*по горизонтали, 3*по вертикали, 2*по диогонали)
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i< lines.length; i++ ){
    let [a,b,c] = lines[i];//Записываем значения ячеек выигрышных линий в переменые a,b,c
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){return squares[a]}//Если метка в одной из выигрышных комбинаций содержит одни и теже символы, то этот символ возвращается
  }
  return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
