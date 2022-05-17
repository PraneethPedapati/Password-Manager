import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import PasswordsList from '../PasswordsList/index'

class PasswordManager extends Component {
  state = {
    passwordsList: [
      {
        id: v4(),
        website: 'Gmail',
        username: 'Praneeth',
        password: 'adbkjdskjvbdh',
      },
    ],
  }

  render() {
    const {passwordsList} = this.state
    const passwordListLength = passwordsList.length

    const showNoPasswords = () => (
      <div className="no-passwords-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-passwords-img"
        />
        <p className="no-passwords-text">No Passwords</p>
      </div>
    )

    const getPasswordsList = () => (
      <ul>
        {passwordsList.map(eachItem => (
          <PasswordsList passwordItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="login-card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager-img"
          />
          <form className="form-container">
            <h1 className="add-password-heading">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-img"
              />
              <input
                type="text"
                placeholder="Enter Website"
                className="input-text"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-img"
              />
              <input
                type="text"
                placeholder="Enter Username"
                className="input-text"
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-img"
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="input-text"
              />
            </div>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="lg-password-manager-img"
          />
        </div>
        <div className="bottom-section-container">
          <div className="your-passwords-text-container">
            <p className="your-passwords-text">
              Your Passwords <span className="your-passwords-count">0</span>
            </p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-img"
              />
              <input className="search-input" />
            </div>
          </div>
          <hr className="break-line" />
          <div className="checkbox-container">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="label-element">
              Show Passwords
            </label>
          </div>
          {passwordListLength === 0 ? showNoPasswords() : getPasswordsList()}
        </div>
      </div>
    )
  }
}

export default PasswordManager
