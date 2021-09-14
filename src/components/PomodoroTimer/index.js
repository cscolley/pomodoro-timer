import React, { useState, useEffect, useRef } from "react";
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
  const audioEl = useRef(null);

  const handleStartStopButtonClick = () => {
    setRunning(!running);
  };

  const handleResetButtonClick = () => {
    setRunning(false);
    setSessionLength(initialSessionLength);
    setBreakLength(initialBreakLength);
    setTimeLeft(initialTimeLeft);
    setTimerType(SESSION);
    audioEl.current.pause();
    audioEl.current.currentTime = 0;
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
          audioEl.current.currentTime = 0;
          audioEl.current.play();
          if (timerType === SESSION) {
            setTimerType(BREAK);
            setTimeLeft(breakLength * 60);
          }
          if (timerType === BREAK) {
            setTimerType(SESSION);
            setTimeLeft(sessionLength * 60);
          }
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  });

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    if (minutes < 10) {
      minutes = "0" + minutes;
      if (minutes === 0) {
        minutes = "00";
      }
    }
    let seconds = Math.floor(time - minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
      if (seconds === 0) {
        seconds = "00";
      }
    }
    return `${minutes}:${seconds}`;
  };

  return (
    <Wrapper>
      <h1>Pomodoro Timer</h1>
      <TimeSettersWrapper>
        <TimeSetter
          labelId="session-label"
          decrementId="session-decrement"
          incrementId="session-increment"
          lengthId="session-length"
          timeSetterType="Session Length"
          length={sessionLength}
          onMinusClick={handleSessionMinusClick}
          onPlusClick={handleSessionPlusClick}
        />
        <TimeSetter
          labelId="break-label"
          decrementId="break-decrement"
          incrementId="break-increment"
          lengthId="break-length"
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
        ref={audioEl}
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </Wrapper>
  );
};

export default PomodoroTimer;
