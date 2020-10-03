import TextInput from '../components/shared/TextInput'
import Select from '../components/shared/Select'
import LANGUAGES from '../constants/languages.constant'
import styles from './search.module.scss'

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props
  const languages = [{ value: '', label: 'All' }, ...LANGUAGES]

  return (
    <div className={styles.search}>
      <TextInput
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
        className={styles.searchInput}
      />
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
        className={styles.languageSelect}
      />
    </div>
  )
}

export default Search
