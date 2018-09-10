import React from 'react' 
import Counter from './Counter'

const App = () => (
    <div style={{
            display : 'flex' ,
            flexWrap : 'wrap'
        }}>
        <Counter id={0} />
        
    </div>
);

export default App