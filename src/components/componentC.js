
import React , { useContext} from 'react'
import{ OrgContext, CourseContext } from '../App.js'

function ComponentC(){
    const organisation = useContext(OrgContext)
    const course = useContext(CourseContext)

    return(
        <div>
            <h1>{organisation}</h1>
            <p>{course}</p>
        </div>
    )
}

export default ComponentC;