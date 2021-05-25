import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TestLinks from "../../componentsSite/sections/test/TestLinks";
import {
  decrementTestCounter,
  incrementTestCounter,
} from "../../redux/reducers/test/counterReducer";

export default function Counter() {
  const testCounter = useSelector((state) => state.testCounter);
  const dispatch = useDispatch();
  return (
    <>
      <TestLinks />
      <h1>Counter</h1>
      {testCounter}
      <br />
      <button onClick={() => dispatch(decrementTestCounter())}>Dec</button>
      <button onClick={() => dispatch(incrementTestCounter())}>Inc</button>
    </>
  );
}
