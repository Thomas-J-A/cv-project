import React, { Component } from 'react';

class EducationEntry extends Component {
  render() {
    const { entries, handleChange, toggleSubmitEdit, removeEntry } = this.props;
    const listItems = entries.map((entry) => {
      if (entry.isEdit) {
        // Data in edit mode
        return (
          <li key={entry.id} id={entry.id}>
            <input
              type='text'
              value={entry.titleOfStudy}
              onChange={handleChange}
              placeholder='Title of Study'
              className='title-of-study'
            />
            <input
              type='text'
              value={entry.placeOfStudy}
              onChange={handleChange}
              placeholder='Place of Study'
              className='place-of-study'
            />
            <label>
              Start:
              <input 
                type='date'
                value={entry.startDate}
                onChange={handleChange}
                className='start-date'
              />
            </label>
            <label>
              End:
              <input 
                type='date'
                value={entry.endDate}
                onChange={handleChange}
                className='end-date'
              />
            </label>
            <i className='far fa-check-circle' onClick={toggleSubmitEdit} />
            <i className='far fa-trash-alt' onClick={removeEntry}/>
          </li>
        );
      } else {
        // Data has been submitted
        return (
          <li key={entry.id} id={entry.id}>
            <p>
              {entry.titleOfStudy === '' ? 'Web Development' : entry.titleOfStudy}
            </p>
            <p>
              {entry.placeOfStudy === '' ? 'The Odin Project' : entry.placeOfStudy}
            </p>
            <p>
              {entry.startDate === '' ? 'Dec 2020' : entry.startDate}
            </p>
            <p>
              {entry.endDate === '' ? 'Aug 2021' : entry.endDate}
            </p>
            <i className='far fa-edit' onClick={toggleSubmitEdit} />
            <i className='far fa-trash-alt' onClick={removeEntry}/>
          </li>
        );
      }
    });

    return (
        <ul>
          {listItems}
        </ul>
    );
  }
}

export default EducationEntry;
