import React from 'react'
import {useState} from "react"
// import ServicesCompo from './ServicesCompo'

const ArtificialIntelijecseMachineLearning = () => {
  const [updown3 , setUpdown3] = useState(false)
  return (
      <li onClick={()=>{setUpdown3(!updown3)}}>
<div className='tile'>AI & Machine Learning</div>
  <div className={`textes ${updown3 ? "" : 'texte'}`}>
    <h2>What is AI & Machine Learning?</h2>
    <p>
      Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think and act like humans. Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed.
    </p>

    <div>
      <h2>Types of Machine Learning:</h2>
      <h3>1. Supervised Learning</h3>
      <h4>● Learns from labeled data</h4>
      <h4>● Example: Spam detection, Image classification</h4>

      <h3>2. Unsupervised Learning</h3>
      <h4>● Works with unlabeled data to find hidden patterns</h4>
      <h4>● Example: Clustering customers, Market segmentation</h4>

      <h3>3. Reinforcement Learning</h3>
      <h4>● Learns through reward and punishment</h4>
      <h4>● Example: Game-playing AI, Robotics navigation</h4>
    </div>

    <div>
      <h2>Key Technologies & Tools:</h2>
      <h4>Programming Languages: Python, R</h4>
      <h4>Libraries: TensorFlow, PyTorch, scikit-learn, Keras</h4>
      <h4>Platforms: Google Colab, Jupyter Notebooks, AWS SageMaker</h4>
      <h4>Data Processing: Pandas, NumPy, OpenCV (for image data)</h4>
    </div>

    <div>
      <h2>Popular AI Domains:</h2>
      <h4>Natural Language Processing (NLP)</h4>
      <h4>Computer Vision</h4>
      <h4>Speech Recognition</h4>
      <h4>Recommendation Systems</h4>
      <h4>Robotics</h4>
    </div>

    <div>
      <h2>Machine Learning Algorithms:</h2>
      <h4>Linear Regression, Logistic Regression</h4>
      <h4>Decision Trees, Random Forest</h4>
      <h4>K-Means Clustering</h4>
      <h4>Support Vector Machines (SVM)</h4>
      <h4>Neural Networks</h4>
    </div>

    <div>
      <h2>Best Practices:</h2>
      <h4>Clean and preprocess data properly</h4>
      <h4>Split data into train/test sets</h4>
      <h4>Use cross-validation to avoid overfitting</h4>
      <h4>Interpret model outputs and explain predictions</h4>
      <h4>Monitor and retrain models with new data</h4>
    </div>

    <div>
      <h2>Real-World Applications:</h2>
      <h4>Self-driving Cars</h4>
      <h4>Chatbots & Virtual Assistants</h4>
      <h4>Fraud Detection Systems</h4>
      <h4>Medical Diagnosis Tools</h4>
      <h4>Personalized Recommendations</h4>
    </div>

    <div>
      <h2>Career Opportunities:</h2>
      <h4>Machine Learning Engineer</h4>
      <h4>Data Scientist</h4>
      <h4>AI Researcher</h4>
      <h4>Computer Vision Engineer</h4>
      <h4>Natural Language Processing (NLP) Engineer</h4>
    </div>
  </div>
      </li>
       
    // </div>
  )
}

export default ArtificialIntelijecseMachineLearning
