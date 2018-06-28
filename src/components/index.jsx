import React, { Component } from 'react'
import uid from 'uid'
import $ from 'jquery'
import { courses } from '../data/courses.json'
import PropTypes from 'prop-types';
import CoursesList from './CoursesList';
import CourseAddForm from './CourseAddForm';

class App extends Component {
	constructor(...props){
		super(...props)

		this.state = {
			courses: []
		}

		this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
		this.fetchData = this.fetchData.bind(this)
		this.resetData = this.resetData.bind(this)
	}

	handleOnAddCourse(e){
		//alert('Event on React')
		e.preventDefault()

		let form = e.target,

		/* Define variables en course */
		course = {
			id: ( form.id.value ) ? form.id.value : App.defaultProps.id,
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

	fetchData(){
		/* setTimeout((cb)=> this.setState({ courses:courses }), 500) */
		$('#root')
			.fadeOut(3000, ()=> this.setState( { courses:courses } ))
			.fadeIn()
	}

	resetData(){
		/* this.setState({ courses: [] }) */

		$('#root')
			.fadeOut(3000, ()=> this.setState( { courses:[] } ))
			.fadeIn()
	}

	componentDidMount() {
		this.fetchData();
	}

	render(){
		if ( !this.state.courses.length ) {
			return (
				<div>
					<p>No hay cursos :(</p>
					<button onClick={this.fetchData}>Cargar Cursos</button>
				</div>
			)
		} else {
			return(
				<div>
					{/* Add CourseAddForm.jsx */}
					<CourseAddForm onAddCourse={this.handleOnAddCourse} />
					{/* Add CoursesList.jsx */}
					<CoursesList courses={this.state.courses} />
					<button onClick={this.resetData}>Borrar Cursos</button>
				</div>
			)
		}
		
	}
}
/* Definir los tipos de datos */
App.propType = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	teacher: PropTypes.string.isRrequired
}

/* Definir por defualt el valor de los datos */
App.defaultProps = {
	id: uid(10),
	name: 'Curso Desconocido',
	teacher: 'Profesor No Asignado'
}

export default App