import React from 'react'
import uid from 'uid'

const CourseAddForm = (props) => (
	<form onSubmit={props.onAddCourse}>
		<input type="text" placeholder="Nombre del Curso" name="name" required />
		<input type="text" placeholder="profesor" name="teacher" required />
		<input type="hidden" name="id" value={uid(10)} />
		<input type="submit" value="Guardar" />
	</form>
)

export default CourseAddForm