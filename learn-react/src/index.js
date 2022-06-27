import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {//Т.к. данный компонент не содержит состояния и у него нет других методов
  //кроме метод render, то его можно сделать функциональным компонентом 
  //(он больше не является расширением React.Component и сам метот render удалён, теперь функция просто возвращяет JSX разметку)
  return (
    <button 
      className={props.className + " square" }
      onClick={props.onClick} 
      >
      {props.value}
    </button>
  );
}

function ChangeListOrderButton(props){
  return (
    <button
      onClick={props.changeOrderList} 
    >
      {props.someText}
    </button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    let className = this.props.winLine.includes(i)? 'redColor': '';
    return (
      <Square 
        value ={this.props.squares[i]} //мы всегда передаём функцию(фигурные скобочки), имя этой фукнции станет именем свойства в props, а значением этого свойства будет то что указанно в фигурных скобочках
        onClick = {()=>this.props.onClick(i)}//Важно! Почему то эта стрелочная функция не должна принимать аргументов. props.onClick см render функцию элемента Square
        className={className}
      />
    );
  }

  renderBoard(){
    let board = []
    for(let i = 0; i<3; i++){
      let row = [];

      for (let k = 0; k<3; k++){row.push(this.renderSquare(k+i*3))}
      board.push(
        <div className="board-row">
          {row}
        </div>
      )
    }
    return board
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
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
      stepNumber : 0,
      xIsNext: true,
      position: undefined,
      isMoveListDescending: true,
    };
  }

  changeOrderList(){
    this.setState({
      isMoveListDescending: !this.state.isMoveListDescending
    })
  }

  handleClick(i){
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();//Создаём копию массива squares из конструктора(это состояние), но зачем мы создаём копию? Это будет объясненно в графе why immutability is important
    const position = {
      col: ((i % 3)+1),
      row: (i - (i % 3) )/3 + 1,
    }
    if(calculateWinner(squares).winner || squares[i]){return}//Если победитель уже найден или ячейка уже заполненна, то функция не сработает.
    squares[i] = this.state.xIsNext? 'X' : 'O';
    this.setState({
      history: history.concat([{//Создаём новый массив в котором есть вся предыдущая история + новая версия squares
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext : !this.state.xIsNext,
      position: Object.assign({},position),
    })
  }

  jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext : (step % 2) === 0, //Если чётное , то будет true в противном случае будет false
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares).winner;
    const winLine = calculateWinner(current.squares).winLine;
    const position = Object.assign({},this.state.position);
    const renderedPosition = this.state.position? `chosen position: [${this.state.position.row}, ${this.state.position.col}]`:``;
    let status;
    if(winner){status = `Winner is bomj ${winner}`}
    else if(this.state.stepNumber == 9){status = `НИЧЬЯ!`}
    else{status = `Next player: ${this.state.xIsNext? 'X' : 'O'}\n${renderedPosition}`;}

    const moves = history.map((step, move) => {
      let desc = move?
        `poshel k move # ${move}` :
        `poshel v game start`;
      desc = (move== history.length-1)? <b>{desc}</b> : desc;
      let key = move;
      return (
        <li key={key}>
          <button onClick = {() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });
    let renderedMoves = this.state.isMoveListDescending? moves: moves.reverse();

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            squares = {current.squares}
            onClick = {(i) => this.handleClick(i)}
            winLine = {winLine}
          />
        </div>
        <div className="game-info">
          <div> {status }</div>
          <ol>{renderedMoves}</ol>
          <ChangeListOrderButton
            someText= "Изменить порядок списка"
            changeOrderList= {() => this.changeOrderList()}
          />
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
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){return {winner: squares[a], winLine: lines[i]}}//Если метка в одной из выигрышных комбинаций содержит одни и теже символы, то этот символ возвращается
  }
  return {winner: undefined, winLine: []};
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
