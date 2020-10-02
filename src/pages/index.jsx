import { useState, useEffect } from 'react'
import Search from '../components/Search'
import searchRepos from '../services/githubService'
import RepoList from '../components/RepoList'
import search from './api/search'
import getRandomWord from '../helpers/randowWord.helper'
import '../scss/styles.scss'

const Index = (props) => {
  const [searchText, setSearchText] = useState(props.searchText)
  const [language, setLanguage] = useState('')
  const [repos, setRepos] = useState(props.repos)
  const [loading, setLoading] = useState(false)

  const onSearchTextChange = (text) => {
    setSearchText(text)
    if (text) {
      loadRepos(text, language)
    }
  }

  const onLanguageChange = (language) => {
    setLanguage(language)
    loadRepos(searchText, language)
  }

  const loadRepos = async (searchText, language) => {
    setLoading(true)
    const res = await searchRepos(searchText, language)
    if (res && res.data) {
      setLoading(false)
      setRepos(res.data.items)
    }

  }

  return (
    <div>
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const searchText = getRandomWord()
  const res = await searchRepos(searchText)

  return {
    props: {
      searchText: searchText,
      repos: res.data.items
    }
  }
}

export default Index