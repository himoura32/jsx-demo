import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value});
  }

  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;


// const SearchBar = () => {
//     const [term, setTerm] = useState('');
  
//     const onFormSubmit = (e) => {
//       e.preventDefault();
//       console.log(term);
//     };
  
//     const onInputChange = (e) => setTerm(e.target.value);
  
//     return (
//       <div className='ui segment'>
//         <form onSubmit={onFormSubmit} className='ui form'>
//           <div className='field'>
//             <label>Image Search</label>
//             <input type='text' value={term} onChange={onInputChange} />
//           </div>
//         </form>
//       </div>
//     );
//   };