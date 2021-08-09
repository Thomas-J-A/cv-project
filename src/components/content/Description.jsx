import React, { Component } from 'react';
import EditButton from './EditButton';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      isOpen: false,
      isEdit: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleSubmitEdit = this.toggleSubmitEdit.bind(this);
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  }

  handleChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  toggleSubmitEdit() {
    this.setState((prevState) => ({
      isEdit: !prevState.isEdit,
    }));
  }

  toggleOpenClosed(e) {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { description, isOpen, isEdit } = this.state;
    let textareaOrParagraph;
    let submitOrEdit;

    // Logic for state of description dropdown
    if (isOpen) {
      if (isEdit) {
        textareaOrParagraph = <textarea value={description} onChange={this.handleChange} placeholder={'A little bit about me...'} />;
        submitOrEdit = <EditButton isEdit={isEdit} toggleSubmitEdit={this.toggleSubmitEdit} />
      } else {
        textareaOrParagraph = (description === '') ? <p>I am a John Doe with no history.</p> : <p>{description}</p>
        submitOrEdit = <EditButton isEdit={isEdit} toggleSubmitEdit={this.toggleSubmitEdit} />
      }
    }

    return (
      <div>
        <span>Description</span>
        <i 
          className={isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
          onClick={this.toggleOpenClosed} 
        />
        {textareaOrParagraph}
        {submitOrEdit}
      </div>
    );
  }
}

export default Description;
