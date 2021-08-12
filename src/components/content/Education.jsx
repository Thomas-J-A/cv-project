import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import EducationEntries from './EducationEntries';

class Education extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: [
        {
          id: nanoid(),
          titleOfStudy: '',
          placeOfStudy: '',
          startDate: '',
          endDate: '',
          isEdit: true,
        },
      ],
      isOpen: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleSubmitEdit = this.toggleSubmitEdit.bind(this);
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    this.createNewEntry = this.createNewEntry.bind(this);
    this.removeEntry = this.removeEntry.bind(this);
  }

  // Create controlled components for all form fields
  handleChange(e) {
    this.setState((prevState) => {
      const updatedArr = prevState.entries.map((entry) => {
        // Check which entry - and then input field - was targeted
        if (entry.id === e.target.parentNode.id) {
          if (e.target.className === 'title-of-study') {
            return { ...entry, titleOfStudy: e.target.value };
          }
          
          return { ...entry, placeOfStudy: e.target.value };
        } else if (entry.id === e.target.parentNode.parentNode.id) {
          if (e.target.className === 'start-date') {
            return { ...entry, startDate: e.target.value };
          }

          return { ...entry, endDate: e.target.value };
        } else {
          return entry;
        }
      });
      
      return {
        entries: updatedArr,
      };
    });
  }

  toggleSubmitEdit(e) {
    this.setState((prevState) => {
      // Find correct entry in entries array to modify its 'isEdit' property
      const updatedArr = prevState.entries.map((entry) => (
        entry.id === e.target.parentNode.id 
          ? { ...entry, isEdit: !entry.isEdit }
          : entry
      ));
      return {
        entries: updatedArr,
      };
    });
  }

  toggleOpenClosed() {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  }

  createNewEntry() {
    const newEntry = {
      id: nanoid(),
      titleOfStudy: '',
      placeOfStudy: '',
      startDate: '',
      endDate: '',
      isEdit: true,
    };

    this.setState((prevState) => (
      prevState.entries.length > 0 
        ? { entries: [...prevState.entries, newEntry] }
        : { entries: [newEntry] }
    ));
  }

  removeEntry(e) {
    this.setState((prevState) => {
      const filteredArr = prevState.entries.filter((entry) => (
        entry.id !== e.target.parentNode.id ? true : false
      ));
      return {
        entries: filteredArr,
      };
    });
  }

  render() {
    const { entries, isOpen } = this.state;
    return (
      <div id='education'>
        <span>Education</span>
        <i 
          className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
          onClick={this.toggleOpenClosed}
        />
        {isOpen 
          ? <div>
              {entries.length !== 0 && 
                <EducationEntries 
                  entries={entries} 
                  handleChange={this.handleChange} 
                  toggleSubmitEdit={this.toggleSubmitEdit}
                  removeEntry={this.removeEntry}
                />
              }
              <i className='fas fa-plus' onClick={this.createNewEntry} />
            </div>
          : null
        }
      </div>
    );
  }
}

export default Education;
