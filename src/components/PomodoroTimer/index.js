import React, { useState, useEffect } from "react";
import Clock from "../Clock";
import ResetButton from "../ResetButton";
import StartStopButton from "../StartStopButton";
import TimeSetter from "../TimeSetter";
import { TimeSettersWrapper, Wrapper, ButtonsWrapper } from "./Timer.styles";

const initialSessionLength = 25;
const initialBreakLength = 5;
const initialTimeLeft = 1500;
const SESSION = "SESSION";
const BREAK = "BREAK";

const PomodoroTimer = () => {
  const [sessionLength, setSessionLength] = useState(initialSessionLength);
  const [breakLength, setBreakLength] = useState(initialBreakLength);
  const [timeLeft, setTimeLeft] = useState(initialTimeLeft);
  const [timerType, setTimerType] = useState(SESSION);
  const [running, setRunning] = useState(false);

  const handleStartStopButtonClick = () => {
    setRunning(!running);
  };

  const handleResetButtonClick = () => {
    setRunning(false);
    setSessionLength(initialSessionLength);
    setBreakLength(initialBreakLength);
    setTimeLeft(initialTimeLeft);
    setTimerType(SESSION);
  };

  const handleSessionMinusClick = () => {
    if (sessionLength > 1) {
      setTimeLeft((sessionLength - 1) * 60);
      setSessionLength(sessionLength - 1);
    }
  };

  const handleSessionPlusClick = () => {
    if (sessionLength < 60) {
      setTimeLeft((sessionLength + 1) * 60);
      setSessionLength(sessionLength + 1);
    }
  };

  const handleBreakMinusClick = () => {
    if (breakLength > 1) {
      setTimeLeft((breakLength - 1) * 60);
      setBreakLength(breakLength - 1);
    }
  };

  const handleBreakPlusClick = () => {
    if (breakLength < 60) {
      setTimeLeft((breakLength + 1) * 60);
      setBreakLength(breakLength + 1);
    }
  };

  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTimeLeft(timeLeft - 1);
        if (timeLeft === 0) {
          const audio = document.getElementById("beep");
          audio.currentTime = 0;
          audio.play();
          if (timerType === SESSION) {
            setTimerType(BREAK);
            setTimeLeft(breakLength * 60);
          }
          if (timerType === BREAK) {
            setTimerType(SESSION);
            setTimeLeft(sessionLength * 60);
          }
        }
      }, 10);
      return () => clearInterval(interval);
    }
  });

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let seconds = Math.floor(time - minutes * 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return `${minutes}:${seconds}`;
  };

  return (
    <Wrapper>
      <h1>Pomodoro Timer</h1>
      <TimeSettersWrapper>
        <TimeSetter
          timeSetterType="Session Length"
          length={sessionLength}
          onMinusClick={handleSessionMinusClick}
          onPlusClick={handleSessionPlusClick}
        />
        <TimeSetter
          timeSetterType="Break Length"
          length={breakLength}
          onMinusClick={handleBreakMinusClick}
          onPlusClick={handleBreakPlusClick}
        />
      </TimeSettersWrapper>
      <Clock>
        <div id="timer-label">{timerType}</div>
        <div id="time-left">{formatTime(timeLeft)}</div>
      </Clock>
      <ButtonsWrapper>
        <StartStopButton onClick={handleStartStopButtonClick} />
        <ResetButton onClick={handleResetButtonClick} />
      </ButtonsWrapper>
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </Wrapper>
  );
};

export default PomodoroTimer;
