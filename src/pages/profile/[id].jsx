import styles from './profile.module.scss'
import { getProfile } from '../../services/githubService'
import React from 'react'

const Profile = ({ profile }) => {
  return (
    <div>
      <ButtonLink href="/" text="Back" />

      <h3 className="is-size-3">{profile.name}</h3>
    </div>
  )
}

export const getServerSideProps = async ({ query }) => {
  const res = await getProfile(query.id)

  return {
    props: {
      profile: res.data,
    },
  }
}

export default Profile
