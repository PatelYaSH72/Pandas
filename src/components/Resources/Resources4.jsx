import React from 'react';
import "./Resources1.css";
import { RiBookOpenFill } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { PiToolboxBold } from "react-icons/pi";
import { BsPalette } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineReceiptLong } from "react-icons/md";
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources4 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
          <h1>AI & Machine learning Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBookOpenFill size={28} style={{color:"#F97316"}}/></div>
              <h3>Learning Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.coursera.org/" target="_blank">Coursera</a></div>
              <div className='rea'>● <a href="https://ai.google/education/" target="_blank">Google AI</a></div>
              <div className='rea'>● <a href="https://www.udemy.com/" target="_blank">Udemy</a></div>
              <div className='rea'>● <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target="_blank">Hands-on ML with Scikit-learn, Keras & TensorFlow</a></div>
              <div className='rea'>● <a href="https://fast.ai/" target="_blank">fast.ai Free Course</a></div>
              <div className='rea'>● <a href="https://ai.google/education/" target="_blank">Google AI Education</a></div>
              <div className='rea'>● <a href="https://online.stanford.edu/" target="_blank">Stanford Online</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><GrDocumentText size={28} style={{color:"#60A5FA"}}/></div>
              <h3>Documentation Links</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://docs.python.org/3/" target="_blank">Python Docs</a></div>
              <div className='rea'>● <a href="https://pytorch.org/docs/" target="_blank">PyTorch Documentation</a></div>
              <div className='rea'>● <a href="https://scikit-learn.org/stable/documentation.html" target="_blank">Scikit-learn Documentation</a></div>
              <div className='rea'>● <a href="https://jax.readthedocs.io/en/latest/" target="_blank">JAX Documentation</a></div>
              <div className='rea'>● <a href="https://www.tensorflow.org/api_docs" target="_blank">TensorFlow Docs</a></div>
              <div className='rea'>● <a href="https://www.jetbrains.com/idea/" target="_blank">IntelliJ IDEA</a></div>
              <div className='rea'>● <a href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank">VS Code (Python)</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{color:"#4ADE80"}}/></div>
              <h3>Coding Platforms & IDEs</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.anaconda.com/" target="_blank">Anaconda (Python)</a></div>
              <div className='rea'>● <a href="https://aws.amazon.com/sagemaker/" target="_blank">Amazon SageMaker</a></div>
              <div className='rea'>● <a href="https://colab.research.google.com/" target="_blank">Google Colab</a></div>
              <div className='rea'>● <a href="https://studio.azureml.net/" target="_blank">Azure ML Studio</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><BsPalette size={28} style={{color:"#F472B6"}}/></div>
              <h3>Design Tools</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.anaconda.com/" target="_blank">Anaconda</a></div>
              <div className='rea'>● <a href="https://jupyter.org/" target="_blank">Jupyter Notebook</a></div>
              <div className='rea'>● <a href="https://playground.tensorflow.org/" target="_blank">TensorFlow Playground</a></div>
              <div className='rea'>● <a href="https://appetize.io/" target="_blank">Appetize.io</a></div>
            </div>
          </li>

          <li className='resou-li'>
            <div className='re-title'>
              <div><MdOutlineScience size={28} style={{color:"#FACC15"}}/></div>
              <h3>Try and Test Apps</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.anaconda.com/" target="_blank">Anaconda</a></div>
              <div className='rea'>● <a href="https://jupyter.org/" target="_blank">Jupyter Notebooks</a></div>
              <div className='rea'>● <a href="https://playground.tensorflow.org/" target="_blank">TensorFlow Playground</a></div>
              <div className='rea'>● <a href="https://appetize.io/" target="_blank">Appetize.io (Simulators)</a></div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
};

export default Resources4;
