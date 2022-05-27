import React from 'react';

function App() {
  return (
    <div className="App text-lg">
      <div>
        <h2>Media Library</h2>
        <button>Add Image</button>
      </div>
      <p>Create, edit and manage the media on your community.</p>
      <div>
        <div>
          <div>select all</div>
          <div>
            <p>delete</p>
            <input type="text" placeholder='search media' />
          </div>
        </div>
        <div>
          <div>Sort By</div>
          <div>
            <button>Title</button>
            <button>Date</button>
            <button>Size</button>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

export default App;
