import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import Garden from "../components/Garden";
import Menu from "../components/Menu";

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const yolo =
  "[<Room: {'id': 35, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 36, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 37, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 38, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 39, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 40, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 41, 'type': Broccoli, 'value': 50, 'isDead': False}>, <Room: {'id': 42, 'type': Eggplant, 'value': 20, 'isDead': False}>, <Room: {'id': 43, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 44, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 45, 'type': Eggplant, 'value': 20, 'isDead': False}>, <Room: {'id': 46, 'type': Eggplant, 'value': 20, 'isDead': False}>, <Room: {'id': 47, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 48, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 49, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 50, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 51, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 52, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 1, 'type': Eggplant, 'value': 20, 'isDead': False}>, <Room: {'id': 53, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 54, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 55, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 56, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 57, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 58, 'type': Carrot, 'value': 25, 'isDead': False}>, <Room: {'id': 59, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 60, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 61, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 62, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 63, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 64, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 65, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 2, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 3, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 4, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 5, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 6, 'type': Broccoli, 'value': 50, 'isDead': False}>, <Room: {'id': 7, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 8, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 9, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 10, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 11, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 12, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 13, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 14, 'type': Broccoli, 'value': 50, 'isDead': False}>, <Room: {'id': 66, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 67, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 68, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 69, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 70, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 71, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 72, 'type': Eggplant, 'value': 20, 'isDead': False}>, <Room: {'id': 73, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 74, 'type': Carrot, 'value': 25, 'isDead': False}>, <Room: {'id': 75, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 76, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 77, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 78, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 79, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 80, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 81, 'type': Eggplant, 'value': 20, 'isDead': False}>, <Room: {'id': 82, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 83, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 15, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 16, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 17, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 18, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 19, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 20, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 21, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 22, 'type': Corn, 'value': 85, 'isDead': False}>, <Room: {'id': 23, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 24, 'type': Broccoli, 'value': 50, 'isDead': False}>, <Room: {'id': 25, 'type': Carrot, 'value': 25, 'isDead': False}>, <Room: {'id': 26, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 27, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 28, 'type': Carrot, 'value': 25, 'isDead': False}>, <Room: {'id': 84, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 29, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 30, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 31, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 32, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 33, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 34, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 85, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 86, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 87, 'type': Potato, 'value': 163, 'isDead': False}>, <Room: {'id': 88, 'type': Broccoli, 'value': 50, 'isDead': False}>, <Room: {'id': 89, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 90, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 91, 'type': Lettuce, 'value': 5, 'isDead': False}>, <Room: {'id': 92, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 93, 'type': Tomato, 'value': 18, 'isDead': False}>, <Room: {'id': 94, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 95, 'type': Carrot, 'value': 25, 'isDead': False}>, <Room: {'id': 96, 'type': Broccoli, 'value': 50, 'isDead': False}>, <Room: {'id': 97, 'type': Pepper, 'value': 30, 'isDead': False}>, <Room: {'id': 98, 'type': Yam, 'value': 177, 'isDead': False}>, <Room: {'id': 99, 'type': Cucumber, 'value': 16, 'isDead': False}>, <Room: {'id': 100, 'type': Eggplant, 'value': 20, 'isDead': False}>]";

const parseStr = str => {
  const step1 = yolo.split("<Room: ").join("");
  const step2 = step1.split(">").join("");
  const step3 = step2.split("[").join("");
  const step4 = step3.split("]").join("");
  const final = JSON.stringify(step2);
  const yoloz = JSON.parse(final);
  console.log(typeof yoloz);
};

const Main = () => {
  const [position, setPosition] = useState(1);
  const [calories, setCalories] = useState(0);
  const [killedBugs, setKilledBugs] = useState(0);

  useEffect(() => {
    getInitialData();
  }, []);

  const getInitialData = e => {
    axios
      .get("https://angry-bugs.herokuapp.com/init/")
      .then(res => {
        setKilledBugs(res.data.killed);
        setCalories(res.data.value);
        setPosition(res.data.room_id);
        console.log(res.data)
      })
      .catch(err => console.error(err));
  };

  const moveBug = e => {
    const move = "e";
    e = e || window.event;
    if (e.keyCode == 37) {
      // const arr = [1, 11, 21, 31, 41, 51, 61, 71, 81, 91];
      // if (arr.includes(position)) {
      //   setPosition(position + 9);
      // } else setPosition(position - 1);

      // e.preventDefault();


      axios
        .post("https://angry-bugs.herokuapp.com/move/", { direction: "Left" })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.error(err));
    }

    if (e.keyCode == 39) {
      const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      if (arr.includes(position)) {
        setPosition(position - 9);
      } else setPosition(position + 1);

      e.preventDefault();
      axios
        .get("https://rickandmortyapi.com/api/character/?page=19")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.error(err));
    }

    if (e.keyCode == 38) {
      if (position <= 10) {
        setPosition(position + 90);
      } else setPosition(position - 10);

      e.preventDefault();
      axios
        .get("https://rickandmortyapi.com/api/character/?page=19")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.error(err));
    }

    if (e.keyCode == 40) {
      if (position >= 91) {
        setPosition(position - 90);
      } else setPosition(position + 10);

      e.preventDefault();
      axios
        .get("https://rickandmortyapi.com/api/character/?page=19")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.error(err));
    }
  };

  document.onkeydown = moveBug;

  return (
    <Container>
      <Garden position={position} />
      <Menu moveBug={moveBug} />
    </Container>
  );
};

export default Main;
