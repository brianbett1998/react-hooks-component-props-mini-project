import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./about";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = "My Blog"/>
      <About image ="https://example.com/logo.png" about="Welcome to my blog!" />
      <ArticleList posts={posts}/>
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
    </div>
  );
}

export default App;
