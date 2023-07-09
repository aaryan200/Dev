import { useEffect, useState } from "react";
const { exec } = require('child_process')

function App() {
  const [file, setFile] = useState(null);
  let imgUrl = null;
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  useEffect(() => {
    if (file != null) {
      imgUrl = URL.createObjectURL(file);
    }
    console.log(file);
    console.log(imgUrl);
  }, [file])
  return (
    <div className="App">
      {file &&
        <img src={imgUrl}
          alt=""
          className="w-[40%] h-[auto] ml-2" />
      }
      <form onSubmit={handleSubmit}>
        <label htmlFor="fileInput">
          <p className="text-base font-semibold ">Choose file</p>
        </label>
        <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
        <button className="writeSubmit" type="submit">Detect</button>
      </form>
    </div>
  );
}

export default App;
