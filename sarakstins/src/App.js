import './App.css';
import "./CrazyInfo.js"
import Information from './CrazyInfo.js';

const CrazyInfo=[{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 2,
  "id": 2,
  "title": "et porro tempora",
  "completed": true
},
{
  "userId": 6,
  "id": 3,
  "title": "fugiat veniam minus",
  "completed": false
},
{
  "userId": 31,
  "id": 4,
  "title": "quis ut nam facilis et officia qui",
  "completed": true
},
{
  "userId": 12,
  "id": 5,
  "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
  "completed": false
},
{
  "userId": 85,
  "id": 6,
  "title": "qui ullam ratione quibusdam voluptatem quia omnis",
  "completed": false
}]



function Title() {

  const Ja = CrazyInfo.map((object, indekss) => {
      return <li> <Information key={indekss} nosaukums0={object.userId} nosaukums1={object.id} nosaukums2={object.title} nosaukums3={object.completed}/> </li>
    });

  return (
    <>
      <h1>koma</h1>
      <img src="https://i.pinimg.com/originals/bf/85/8d/bf858df0a5f95a303080d4d685a47355.jpg"/>
      <ul>{Ja}</ul>

    </>
  );
}

export default Title;
