import app from "./app";

const PORT = 4000;

const handleListen = () => {
  console.log("listen");
};

app.listen(PORT, handleListen);
