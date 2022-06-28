import osu from './osu.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="header">Tharoon Balaji
      </h1>
      <h2>Contact:
        <img src="" onClick="" ></img>
      </h2>
      <div>  

        <div className ="about">
          A little about me:
          <div className="blurb">
            My name is Tharoon Balaji, a student currently studying Finance and Information Systems, with a minor in Spanish. I am a student Honors Finance Program as well, while also being involved in the Delta Sigma Pi
            Nu Professional Business Fraternity serving as both an active brother and the Director of Alumni Database. I am also president and founder of the South Asian Fisher Organization within tOSU, to provide South Asian 
            Students a platform and community to grow together in an underrepresented field. 
          </div>
        </div>
        <div className="edu-wrapper">
          <div className="edu">
            Education: The Ohio State University 
          </div>
          <div className="intr">
            Professional interests: I am seeking opportunities where I would be able to fully utilize my interests in both business and technology, including fintech, blockchain technologies, and more. 
          </div>
          <img src={osu} className="osu-img"/>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
