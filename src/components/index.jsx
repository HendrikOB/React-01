import React, { Component } from 'react'
import PropTypes from 'prop-types';
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';

class App extends Component {
	constructor(...props){
		super(...props)

		this.state = {
			courses: [
				{ id: 1, name: 'React desde cero', teacher: 'Jonathan Mircha' },
				{ id: 2, name: 'Drupal 8 desde cero', teacher: 'Alberto Quiroga' },
			]
		}

		this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
	}

	handleOnAddCourse(e){
		//alert('Event on React')
		e.preventDefault()

		let form = e.target,

		/* Define variables en course */
		course = {
			id: form.id.value,
			/* Agregando validacion con el operador ternario "?" */
			name: ( form.name.value ) ? form.name.value : App.defaultProps.name,
			teacher: (form.teacher.value ? form.teacher.value : App.defaultProps.teacher)
		}

		this.setState({
			/* Actualiza el estado (state) */
			courses: this.state.courses.concat([course])
		})

		/* Resetea el Formulario */

		form.reset()
	}

	render(){
		return(
			<div>
				{/* Add CourseAddForm.jsx */}
				<CourseAddForm onAddCourse={this.handleOnAddCourse} />
				{/* Add CoursesList.jsx */}
				<CoursesList courses={this.state.courses} />
			</div>
		)
	}
}
/* Definir los tipos de datos */
App.propType = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRrequired
}

/* Definir por defualt el valor de los datos */
App.defaultProps = {
	name: 'Curso Desconocido',
	teacher: 'Profesor No Asignado'
}

export default App