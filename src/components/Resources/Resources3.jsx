import React from 'react';
import './Resources1.css';
import { PiToolboxBold } from 'react-icons/pi';
import { GrDocumentText } from 'react-icons/gr';
import { PiPackage } from 'react-icons/pi';
import { BsPalette } from 'react-icons/bs';
import { RiBookOpenLine } from 'react-icons/ri';
import { MdOutlineDevices } from 'react-icons/md';
import { HiArrowSmallLeft } from 'react-icons/hi2';

const Resources3 = () => {
  return (
    <div className="resources-container">
      <a className="servibtn" href='/ServiceComt'><HiArrowSmallLeft size={18}/> Home</a>
      <div className="re-container">
        <div className='title-co'>
        <h1>Mobile Development Resources</h1>
        </div>
        <ul>
          {/* Learning Resources */}
          <li className="resou-li">
            <div className="re-title">
              <div><RiBookOpenLine size={28} style={{ color: "#4ADE80" }} /></div>
              <h3>Learning Resources</h3>
            </div>
            <div className="rea-container">
              {[
                ['Udacity', 'https://www.udacity.com/'],
                ['Ray Wenderlich', 'https://www.kodeco.com/'],
                ['Uderny', '#'],
                ['Flutter & Dart Bootcamp by Angela Yu', 'https://www.udemy.com/course/flutter-bootcamp-with-dart/'],
                ['Android & iOS Developer Nanodegree (Udacity)', 'https://www.udacity.com/course/android-kotlin-developer-nanodegree--nd940'],
                ['Google’s Resources for Flutter', 'https://flutter.dev/']
              ].map(([name, url]) => (
                <div className="rea" key={name}>● <a href={url} target="_blank">{name}</a></div>
              ))}
            </div>
          </li>

          {/* Documentation Links */}
          <li className="resou-li">
            <div className="re-title">
              <div><GrDocumentText size={28} style={{ color: "#60A5FA" }} /></div>
              <h3>Documentation Links</h3>
            </div>
            <div className="rea-container">
              {[
                ['Flutter official docs', 'https://docs.flutter.dev/'],
                ['Android Developers guides and docs', 'https://developer.android.com/docs'],
                ['iOS Developer Documentation (Apple)', 'https://developer.apple.com/documentation/'],
                ['React Native official docs', 'https://reactnative.dev/docs/getting-started'],
                ['Swift Language Documentation', 'https://swift.org/documentation/'],
                ['Kotlin official docs', 'https://kotlinlang.org/docs/home.html']
              ].map(([name, url]) => (
                <div className="rea" key={name}>● <a href={url} target="_blank">{name}</a></div>
              ))}
            </div>
          </li>

          {/* Coding Platforms & IDEs */}
          <li className="resou-li">
            <div className="re-title">
              <div><PiToolboxBold size={28} style={{ color: "#FACC15" }} /></div>
              <h3>Coding Platforms & IDEs</h3>
            </div>
            <div className="rea-container">
              {[
                ['Xcode (for iOS/macOS)', 'https://developer.apple.com/xcode/'],
                ['Android Studio', 'https://developer.android.com/studio'],
                ['Visual Studio Code (Flutter support)', 'https://code.visualstudio.com/'],
                ['IntelliJ IDEA (React Native support)', 'https://www.jetbrains.com/idea/'],
                ['GitHub and GitLab (Code Hosting)', 'https://github.com/']
              ].map(([name, url]) => (
                <div className="rea" key={name}>● <a href={url} target="_blank">{name}</a></div>
              ))}
            </div>
          </li>

          {/* Design Tools */}
          <li className="resou-li">
            <div className="re-title">
              <div><BsPalette size={28} style={{ color: "#F472B6" }} /></div>
              <h3>Design Tools</h3>
            </div>
            <div className="rea-container">
              {[
                ['Figma', 'https://figma.com/'],
                ['Sketch', 'https://www.sketch.com/'],
                ['Adobe XD', 'https://www.adobe.com/products/xd.html'],
                ['Marvel App', 'https://marvelapp.com/'],
                ['Framer', 'https://www.framer.com/'],
                ['Icon & I/Kit (Creative Tim)', 'https://www.creative-tim.com/'],
                ['Mobile design patterns at Mobbin', 'https://mobbin.com/']
              ].map(([name, url]) => (
                <div className="rea" key={name}>● <a href={url} target="_blank">{name}</a></div>
              ))}
            </div>
          </li>

          {/* Try and Test Apps */}
          <li className="resou-li">
            <div className="re-title">
              <div><MdOutlineDevices size={28} style={{ color: "#F97316" }} /></div>
              <h3>Try and Test Apps</h3>
            </div>
            <div className="rea-container">
              {[
                ['Expo Go (React Native)', 'https://expo.dev/client'],
                ['Firebase App Distribution', 'https://firebase.google.com/products/app-distribution'],
                ['Codemagic CI/CD for Flutter and React Native', 'https://codemagic.io/'],
                ['Appetize.io (iOS and Android simulator)', 'https://appetize.io/']
              ].map(([name, url]) => (
                <div className="rea" key={name}>● <a href={url} target="_blank">{name}</a></div>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources3;

