import React, { useState } from 'react'
import  Modal from './Modal'
import "./App.scss"

function App() {
	const [data, setData] = useState(['html', 'css', 'Java Script', 'React.js', 'Node.js', 'Python']);
	const [isOpen, setIsOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState(null)
	const toggleModal = () => { 
		setIsOpen(!isOpen)
	 }

	const setIndex = (indx) => { 
		setActiveIndex(indx)
	 }
	return (
		<div className='container'>
			{isOpen && (
				<Modal>
					<h2>Are you Sure?</h2>
					<button onClick={toggleModal}>cancel</button>
					<button onClick={() => {
						setData(data.filter((_, i) => i !== activeIndex))
						toggleModal()
					}}>delete</button>
				</Modal>
			)}
			{data.map((elem,index) => {
				return (
					<div key={index} className='container__item'>
							<p>{elem}</p>
							<button onClick={() => {
							toggleModal()
							setIndex(index)
							}}>Delete</button>
					</div>
			)
			})}

		</div>
	)
}

export default App