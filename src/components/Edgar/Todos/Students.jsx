import React from 'react'

export default function Students({ students, changeUserId, editableUserId, editHandleSubmit }) {
  return (
    <div className='table'>
			<div className='thead'>
        <p className='tr'>
					<th>N </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email address</th>
          <th>Language</th>
          <th>Registered date</th>
        </p>
			</div>
			<div className='tbody'>
        {
          students.length > 0 ? (
            students.map((student, index) => {
              return (
								<>
									{
										(editableUserId !== student.id) ? (
											<p className='tr' key={student.id}>
												<td>{index + 1}</td>
												<td>{student.firstname}</td>
												<td>{student.lastname}</td>
												<td>{student.email}</td>
												<td>{student.languages}</td>
												<td>{student.registeredDate.calendar()}</td>
												<td><i class="fa-solid fa-pen" onClick={() => changeUserId(student.id)}></i></td>
											</p>
										): (
											<form onSubmit={editHandleSubmit}>
													<td>{index + 1}</td>
													<div>
														<input type="text" placeholder={student.firstname} id='firstname'/>
													</div>
													<div>
														<input type="text" placeholder={student.lastname} id='lastname'/>
													</div>
													<div>
														<input type="text" placeholder={student.email} id='email'/>
													</div>
													<div>
														<select name="languages" id="languages" defaultValue={student.languages} required>
															<option value="" disabled></option>
															<option value="html&css">HTML & CSS</option>
															<option value="javascript">javascript</option>
															<option value="react.js">React.js</option>
															<option value="node.js">Node.js</option>
															<option value="TypeScript">TypeScript</option>
														</select>
													</div>
													<div>
														<input type="date" defaultValue={student.registeredDate.format('L')} id='registeredDate' />
													</div>
													<div>
														<input type="submit"  value='save'/>
													</div>
											</form>
										)
									}
								</>

       
              )
            })
          ) : (
            <tr>
              <td colSpan={6}>users not found</td>
            </tr>
          )
        }
      </div>
    </div>
  )
}
