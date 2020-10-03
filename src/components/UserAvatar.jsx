import React from 'react'
import styles from './userAvatar.module.scss'
import Link from 'next/link'

const UserAvatar = ({ user }) => {
  return (
    <div className={styles.user}>
      <figure className={`${styles.avatar} image`}>
        <img src={user.avatar_url} alt="User avatar" className="is-rounded" />
      </figure>
      <div className={styles.userLink}>
        <Link href="/profile/[id]" as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
      </div>
    </div>
  )
}

export default UserAvatar
