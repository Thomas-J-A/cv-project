import React, { Component } from 'react';

class ExperienceEntries extends Component {
  render() {
    const { entries, handleChange, toggleSubmitEdit, removeEntry } = this.props;
    const listItems = entries.map((entry) => {
      if (entry.isEdit) {
        // Data in edit mode
        return (
          <li key={entry.id} id={entry.id}>
            <input
              type='text'
              value={entry.position}
              onChange={handleChange}
              placeholder='Position'
              className='position'
            />
            <input 
              type='text'
              value={entry.company}
              onChange={handleChange}
              placeholder='Company'
              className='company'
            />
            <textarea
              value={entry.duties}
              onChange={handleChange}
              placeholder='Duties'
              className='duties'
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
              {entry.position === '' ? 'Junior Developer' : entry.position}
            </p>
            <p>
              {entry.company === '' ? 'Facebook' : entry.company}
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

export default ExperienceEntries;
