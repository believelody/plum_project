import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1% 5%;
`;

const Profiles = styled.ul`
  width: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 0;
  margin-bottom: 20px;
  border-radius: 20px;
`;

const Profile = styled.li`
  min-width: 200px;
  margin: 0;
  padding: 0;
`;

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      contacts: []
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?nat=uk,fr,gb&results=20')
      .then(res => res.json())
      .then(parsedRes => parsedRes.results.map(user =>
        (
          {
            name: `${user.name.first} ${user.name.last}`,
            email: user.email,
            thumbnail: user.picture.thumbnail
          }
        )
      ))
      .then(contacts => this.setState({contacts}));
  }

  handleUserInput = e => {
    this.setState({ filterText: e.target.value });
  }

  render() {
    const { contacts, filterText } = this.state;
    const filteredContacts = contacts.filter(contact => contact.name.indexOf(filterText) !== -1);

    return (
      <Wrapper>
        <Input
          type="search"
          placeholder="Search"
          value={ filterText }
          onChange={ this.handleUserInput }
        />
        <Profiles>
          {
            filteredContacts.map(
              (contact) =>
              <Profile key={contact.email}>
                <img src={contact.thumbnail} alt="user" style={{borderRadius: '50%'}} />
                <div className="contactData">
                  <strong>{contact.name}</strong><br/><small>{contact.email}</small>
                </div>
              </Profile>
            )
          }
        </Profiles>
      </Wrapper>
    );
  }

}

export default Test;
