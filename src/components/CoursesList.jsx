import React, {Component} from 'react'

export default class CoursesList extends Component {
	render() {
		return(
			<div>
				<form>
					<input type="text" placeholder="Nombre del Curso" name="name" required />
					<input type="text" placeholder="profesor" name="teacher" required />
					<input type="hidden" name="id" value={Math.floor(Math.random()*100)} />
					<input type="submit" value="Guardar" />
				</form>
				<ul>
					<li>Curso 1</li>
					<li>Curso 2</li>
				</ul>
			</div>
		)
	}
}