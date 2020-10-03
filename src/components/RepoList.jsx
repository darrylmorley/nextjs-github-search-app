import React from 'react'
import RepoListItem from './RepoListItem'
import styles from './repolist.module.scss'

function RepoList({ repos, loading }) {
  if (loading) {
    return <img src="/img/pacman-loading.gif" className={styles.loader} />
  }

  if (!repos || repos.length === 0) {
    return <div className={styles.message}>No Repositories Found.</div>
  }

  return (
    <div className={styles.repolist}>
      {repos.map((repo) => {
        return <RepoListItem key={repo.id} repo={repo} />
      })}
    </div>
  )
}

export default RepoList
