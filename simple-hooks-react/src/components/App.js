import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';


const App = () => { 
    // initial state + setState 
    const [resource, setResource] = useState('posts'); // hook
    // state = { resource: post }

    return (
      <div>
        <UserList />
        <div>
          <button onClick={() => setResource('posts')}>Posts</button> {/*Hook*/}
          {/* <button onClick={() => this.setState({resource: 'posts'}) }>Posts</button> */}
          <button onClick={() => setResource('todos')}>Todos</button>
        </div>
        <ResourceList resource={resource}/>
      </div>
    );
  
}

export default App;
