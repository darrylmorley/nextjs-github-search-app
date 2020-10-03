import styles from './repo.module.scss'
import { getRepo } from '../../services/githubService'
import React from 'react'
import ButtonLink from '../../components/shared/buttonLink'
import UserAvatar from '../../components/UserAvatar'

const Repo = ({ repo }) => {
  return (
    <div>
      <ButtonLink href="/" text="Back" />

      <div className={styles.header}>
        <span>{repo.name}</span>
      </div>
      <UserAvatar user={repo.owner} />

      <div className={styles.description}>{repo.description}</div>
      <div className={styles.language}>{repo.language}</div>

      <ButtonLink
        href={repo.html_url}
        text="View on Github"
        type="dark"
        target="_blank"
        external
      />
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const res = await getRepo(query.id)

  return {
    props: {
      repo: res.data,
    },
  }
}

export default Repo
