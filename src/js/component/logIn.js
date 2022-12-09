import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import styles from "../../styles/logIn.css";

export const LogIn = () => {
  const { store, actions } = useContext(Context);

  return (
        <div>
        <h1>This is a test</h1>
        <p>This is also a test</p>
        </div>
  );
};



