import React, { useEffect } from "react";
import auth from "@react-native-firebase/auth";

export default function App() {
  useEffect(() => {
    console.log("auth=", auth().currentUser);
  }, []);
  return null;
}
