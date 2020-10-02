import React from 'react'
import RepoListItem from './RepoListItem'

function RepoList({ repos, loading }) {
  if (loading) {
    return 'Loading...'
  }

  if (!repos || repos.length === 0) {
    return <div>No Repositories Found.</div>
  }

  return (
    <div>
      {repos.map(repo => {
        return <RepoListItem key={repo.id} repo={repo} />
      })}
    </div>
  )
}

export default RepoList
