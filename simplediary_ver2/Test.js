```js
//...

const AccountEditor = ({ onCreate }) => {

const [content, setContent] = useState("");

// ...

  const handleSubmit = () => {

//...

 if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
  // ...

  return (
    <div>
      <button onClick={handlesubmit}></button>
    </div>
  );
};


```;
