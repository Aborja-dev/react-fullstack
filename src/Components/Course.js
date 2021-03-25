import React from 'react'

//Components
const Header = (props)=><h1>{props.course}</h1>
const Part = (props)=><p>{props.part.name} {props.part.exercises}</p>
const Content = ({content})=>(
    <div>
        { content.map((object)=><Part key={object.id} part={object}/>) }
    </div>
    )
const Total = (props)=>{
  const total = props.parts
  .map((object)=>object.exercises)
  .reduce((total,value)=>total+value)
  return (
    <p><strong>Total de ejercicios {total}</strong></p>
  )
}
//=========================================================

const Course = (props)=>{
  const course = props.list
  return (
    <div>
      <Header course={course.name}/>
      <Content content = {course.parts}/>
      <Total parts={course.parts} />
    </div>
  )
}

export default Course