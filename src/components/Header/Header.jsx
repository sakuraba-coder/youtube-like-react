import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import Style from "./Header.module.scss";
import { Store } from '../../store';

const Header = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate();
  const onChange = (e) => setTerm(e.target.value)
  const {globalState, setGlobalState} = useContext(Store)

  const handleSubmit = e => {
    e.preventDefault()
    setGlobalState({type: 'SET_TERM', payload: {term}})
    navigate(`/search?query=${term}`)
  }

  useEffect(() => {
    setTerm(globalState.term);
  },[])

  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to='/'>VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='検索' onChange={onChange} value={term} />
          <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header