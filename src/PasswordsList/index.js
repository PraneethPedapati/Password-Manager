import './index.css'

const PasswordList = props => {
  const {passwordItem} = props
  const {website, username, password} = passwordItem
  return (
    <li>
      <p>{username[0]}</p>
      <div>
        <p>{website}</p>
        <p>{username}</p>
        <p>{password}</p>
      </div>
    </li>
  )
}

export default PasswordList
