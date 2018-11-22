import { withRouter } from 'next/router'
import {ActiveLinkWrapper} from './style'

const ActiveLink = ({ children, router, href }) => {

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={router.pathname.match(href) ? 'active' : ''}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)