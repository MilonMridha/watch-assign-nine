import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className='mt-5 border shadow rounded p-4'>
                <h4><span className='text-danger'>Qes :</span> What is Context Api?</h4>
                <h5>Ans :</h5>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='mt-5 border shadow rounded p-4'>
                <h4><span className='text-danger'>Qes :</span> What is Semantic Tag?</h4>
                <h5>Ans : </h5>
                <p>Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way. Elements such as header , footer, main and article,nav, section are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it.</p>
            </div>

        </div>
    );
};

export default Blogs;