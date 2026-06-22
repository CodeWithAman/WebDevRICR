import React from 'react'
import { Link } from 'react-router-dom'
import { FaBullseye , FaHandshake , FaLeaf , FaArrowRight } from 'react-icons/fa'

const stats = [
  {value:"120K+" , label:"Orders Shipped"},
  {value:"4.7/5" , label:"Avg. Rating"},
  {value:"48 HR" , label:"Avg. Dispatch"},
  {value:"30 DAY" , label:"Returns"},
];

const values = [
  {
    icon: FaBullseye,
    title: "Curated, not cluttered",
    body: "Every product on the shelf earns its spot. We'd rather list 500 good items than 5,000 mediocre ones.",
  },
  {
    icon:FaHandshake,
    title: "Fair from checkout to return",
    body: "Clear pricing, honest descriptions and a returns process that doesn't make you fight for it.",
  },
  {
    icon:FaLeaf,
    title:"Built to last"
  }
]

const About = () => {
  return (
    <div>About</div>
  )
}

export default About
