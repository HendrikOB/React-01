import React, { Component, PropTypes } from 'react'
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
			name: form.name.value,
			teacher: form.teacher.value
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

App.propType = {}

App.defaultProps = {}

export default App