import Router from "next/router";
import { useEffect } from "react";

export default function Web() {
  useEffect(() => {
    Router.replace("/home");
  }, []);
}
