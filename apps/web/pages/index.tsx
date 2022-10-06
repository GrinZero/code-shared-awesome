import Router from "next/router";
import React, { useEffect } from "react";

export default function Web() {
  useEffect(() => {
    Router.replace("/home");
  }, []);
}
