import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='container'>
        <div className='my-5'>
        <div className="my-5 text-center ">
            <h1 className='text-info'> Blog Question</h1>
            </div>
            <div className="mx-auto mx-md-5">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        What is purpose in react router?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                         React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How context api works ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                                    </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        What is useref in react ?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="collapseFour"
                                    data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
                                    Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                                    You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with, React will set its .current property to the corresponding DOM node whenever that node changes.
                                        
                                    However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classNamees.
                                        
                                    This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a "current: ..."  object yourself is that useRef will give you the same ref object on every render.
                                    </div>
                                </div>
                            </div>
                            </div>
                </div>
        
            </div>
        </div>
    );
};

export default Blog;