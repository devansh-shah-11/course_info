import React from 'react';
import Counter from './counter'

const Hello = (props) => {
  const name = props.name;
  const age = props.age;
  const courses = props.courses;
  console.log(new Date().getFullYear())
  console.log(age);
  const BornYear = () => new Date().getFullYear() - age;
  if (props.age < 18) {
    return (
      <div>
        <p>Hello {name}, you are {age} years old, you are not allowed to take part in this course</p>
        <p>You were probably born in {BornYear()}</p>
      </div>
    );
  }
  return (
    <div>
      <p>Hello {name}, Welcome to the course: {courses}</p>
    </div>
  );

}

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  );
};

const Content = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  );
};

const App = () => {
  const name = 'Devansh';
  const age = 11;

  let digit = 1;

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  console.log(course.name, course.parts[0].name, course.parts[0].exercises, course.parts[1].name, course.parts[1].exercises, course.parts[2].name, course.parts[2].exercises);
  return (
    <div>
      <Hello name={name} age={age} courses={course.name}/>
      <Header course={course.name} />
      <Content part={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content part={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content part={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises} />
      <Counter digit={digit} />
    </div>
  );
};

export default App;