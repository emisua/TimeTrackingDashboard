const Nav = ({ time, setTime }) => {
  const activeClass = (word) => {
    return word === time ? 'active' : ''
  }

  return (
    <nav>
      <ul>
        <li onClick={() => setTime('daily')}>
          <a className={activeClass('daily')}>Daily</a>
        </li>
        <li onClick={() => setTime('weekly')}>
          <a className={activeClass('weekly')}>Weekly</a>
        </li>
        <li onClick={() => setTime('monthly')}>
          <a className={activeClass('monthly')}>Monthly</a>
        </li>
      </ul>
    </nav>
  )
}
export default Nav
