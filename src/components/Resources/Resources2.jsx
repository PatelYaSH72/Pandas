import React from 'react';
// import "./ResourcesData.css";
import { PiToolboxBold } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { MdCleaningServices } from "react-icons/md";
import { TbChartBar } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources2 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className='re-container'>
        <div className='title-co'>
        <h1>Data science and analysis Resources</h1>
        </div>
        <ul>
          <li className='resou-li'>
            <div className='re-title'>
              <div><PiToolboxBold size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>General Learning Resources</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://www.datacamp.com/" target='_blank'>DataCamp</a></div>
              <div className='rea'>● <a href="https://www.dataquest.io/" target='_blank'>Dataquest</a></div>
              <div className='rea'>● <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target='_blank'>Google Data Analytics Professional Certificate</a></div>
              <div className='rea'>● <a href="https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/" target='_blank'>Jese Portilia’s Python for Data Science</a></div>
              <div className='rea'>● <a href="https://www.coursera.org/specializations/jhu-data-science" target='_blank'>Coursera Data Science Specializations</a></div>
              <div className='rea'>● <a href="https://ocw.mit.edu/index.htm" target='_blank'>MIT OpenCourseWare (OCW)</a></div>
            </div>
          </li>
          <li className='resou-li'>
            <div className='re-title'>
              <div><RiBook2Line size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Books</h3>
            </div>
            <div className='rea-container'>
              <div className='rea'>● <a href="https://jakevdp.github.io/PythonDataScienceHandbook/" target='_blank'>Python Data Science Handbook</a></div>
              <div className='rea'>● <a href="https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/" target='_blank'>Hands-On Machine Learning</a></div>
              <div className='rea'>● <a href="https://www.crcpress.com/An-Introduction-to-Statistical-Learning/James-Witten-Hastie-Tibshirani/p/book/9781461471370" target='_blank'>Introduction to Statistical Learning</a></div>
              <div className='rea'>● <a href="https://www.oreilly.com/library/view/data-science-for/9781491941089/" target='_blank'>Data Science for Business</a></div>
              <div className='rea'>● <a href="https://www.manning.com/books/deep-learning-with-python" target='_blank'>Deep Learning with Python</a></div>
              <div className='rea'>● <a href="https://www.dummies.com/book/technology/programming-software/data-science/data-science-for-dummies-282267/" target='_blank'>Data Science for Dummies</a></div>
            </div>
          </li>
          <li className='resou-li'>
  <div className='re-title'>
    <div><SiPython size={28} style={{ color: "#FACC15" }} /></div>
    <h3>Python Libraries</h3>
  </div>
  <div className='rea-container'>
    <div className='rea'>● <a href="https://numpy.org/" target="_blank">NumPy</a></div>
    <div className='rea'>● <a href="https://pandas.pydata.org/" target="_blank">Pandas</a></div>
    <div className='rea'>● <a href="https://matplotlib.org/" target="_blank">Matplotlib</a></div>
    <div className='rea'>● <a href="https://seaborn.pydata.org/" target="_blank">Seaborn</a></div>
    <div className='rea'>● <a href="https://plotly.com/python/" target="_blank">Plotly</a></div>
    <div className='rea'>● 
      <a href="https://altair-viz.github.io/" target="_blank">Altair</a>, 
      <a href="https://yhat.github.io/ggpy/" target="_blank"> ggplot</a>
    </div>
    <div className='rea'>● <a href="https://scipy.org/" target="_blank">SciPy</a></div>
  </div>
</li>

          <li className='resou-li'>
  <div className='re-title'>
    <div><MdCleaningServices size={28} style={{ color: "#38BDF8" }} /></div>
    <h3>Data Collection & Cleaning</h3>
  </div>
  <div className='rea-container'>
    <div className='rea'>● 
      <a href="https://www.crummy.com/software/BeautifulSoup/bs4/doc/" target="_blank">
        Beautiful Soup
      </a>
    </div>
    <div className='rea'>● 
      <a href="https://www.selenium.dev/documentation/" target="_blank">
        Selenium
      </a>
    </div>
    <div className='rea'>● 
      <a href="https://www.tensorflow.org/tutorials/images/data_augmentation" target="_blank">
        Data Augmentation Libraries
      </a>
    </div>
    <div className='rea'>● 
      <a href="https://www.datacamp.com/courses/sql-for-data-scientists" target='_blank'>
        SQL Tutorial
      </a>
    </div>
    <div className='rea'>● 
      <a href="https://openrefine.org/" target="_blank">OpenRefine</a> <a style={{textdecoration:"none"}}>and</a> 
      <a href="https://pandas.pydata.org/docs/user_guide/index.html#missing-data" target="_blank"> Pandas</a>
    </div>
  </div>
</li>
          <li className='resou-li'>
  <div className='re-title'>
    <div><TbChartBar size={28} style={{ color: "#F472B6" }} /></div>
    <h3>Data Visualization Tools</h3>
  </div>
  <div className='rea-container'>
    <div className='rea'>● 
      <a href="https://www.tableau.com/" target="_blank">Tableau</a>
    </div>
    <div className='rea'>● 
      <a href="https://powerbi.microsoft.com/" target="_blank">Power BI</a>
    </div>
    <div className='rea'>● 
      <a href="https://lookerstudio.google.com/" target="_blank">Google Data Studio</a>
    </div>
  </div>
</li>

          <li className='resou-li'>
  <div className='re-title'>
    <div><FaChartLine size={28} style={{ color: "#F97316" }} /></div>
    <h3>Statistical and Analytical Tools</h3>
  </div>
  <div className='rea-container'>
    <div className='rea'>● 
      <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank">Excel</a> / 
      <a href="https://www.google.com/sheets/about/" target="_blank"> Google Sheets</a>
    </div>
    <div className='rea'>● 
      <a href="https://www.ibm.com/products/spss-statistics" target="_blank">SPSS</a>
    </div>
    <div className='rea'>● 
      <a href="https://www.r-project.org/" target="_blank">R</a>
    </div>
    <div className='rea'>● 
      <a href="https://www.knime.com/" target="_blank">KNIME</a>
    </div>
  </div>
</li>

        </ul>
      </div>
    </div>
  );
};

export default Resources2;
