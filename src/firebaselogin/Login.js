import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  login() {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      this.setState({
        user
      });
    });
  }
  // TODO  add logout to Nav Bar
  logout() {
    auth.signOut().then(() => {
      this.setState({
        user: null
      });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.user.displayName || this.state.user.email
    };

    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      }
    });
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  render() {
    return (
      <div>
        <header>
          <div>
            {this.state.user ? (
              <button className="button__size" onClick={this.logout}>
                Logout
              </button>
            ) : (
              <button onClick={this.login}>Log In Here</button>
            )}
          </div>
        </header>
        {this.state.user ? (
          <div>
            <div>
              <img
                className="loader__image"
                src={this.state.user.photoURL}
                alt=""
              />
            </div>
            <div>
              <section>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    name="username"
                    placeholder="What's your name?"
                    onChange={this.handleChange}
                    value={this.state.user.displayName || this.state.user.email}
                  />
                  <input
                    type="text"
                    name="currentItem"
                    placeholder="What are you bringing?"
                    onChange={this.handleChange}
                    value={this.state.currentItem}
                  />
                  <button>Add Item</button>
                </form>
              </section>

              <section>
                <div>
                  <ul>
                    {this.state.items.map(item => {
                      return (
                        <li key={item.id}>
                          <h3>{item.title}</h3>
                          <p>
                            brought by: {item.user}
                            {item.user === this.state.user.displayName ||
                            item.user === this.state.user.email ? (
                              <button onClick={() => this.removeItem(item.id)}>
                                Remove Item
                              </button>
                            ) : null}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        ) : (
          <p>Log In to See the Fly Shop.</p>
        )}
      </div>
    );
  }
}
export default App;
