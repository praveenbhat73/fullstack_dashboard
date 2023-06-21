import React, { useState } from "react";
import ReactDOM from "react-dom";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";
import "./Style.css"

const board = {
  columns: [
    {
      id: 1,
      title: "To do",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content"
        },
      
      ]
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content"
        }
      ]
    },
    {
      id: 3,
      title: "Done",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content"
        },
     
      ]
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content"
        },
      
      ]
    }
  ]
};

function ControlledBoard() {
  // You need to control the state yourself.
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} >
      {controlledBoard}
    </Board>
  );
}

function UncontrolledBoard() {
    const [controlledBoard, setBoard] = useState(board);
    function handleCardMove(_card, source, destination) {
        const updatedBoard = moveCard(controlledBoard, source, destination);
        setBoard(updatedBoard);
      }
  return (
    <Board
      allowRemoveLane
    //   allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={draftCard => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
      onCardDragEnd={handleCardMove}
    />
  );
}

function Kanban() {
  return (
    <>
     
      <UncontrolledBoard />
      
       {/* <ControlledBoard/> */}
     
    </>
  );
}
export default Kanban 

