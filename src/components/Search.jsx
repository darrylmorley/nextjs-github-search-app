import TextInput from '../components/shared/TextInput'
import Select from '../components/shared/Select'
import LANGUAGES from '../constants/languages.constant'

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props
  const languages = [{ value: '', label: 'All' }, ...LANGUAGES]

  return (
    <div>
      <TextInput
        label="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
      />
      <Select
        label="Language"
        value={language}
        options={languages}
        onChange={(value) => onLanguageChange(value)}
      />
    </div>
  )
}

export default Search