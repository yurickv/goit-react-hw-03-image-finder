import { Formic } from 'formik';
import { ImSearch } from 'react-icons/im';
import { Header, SearchForm, SearchField, Button } from './Searchbar.styled';

export const Searchbar = ({ onSearch }) => {

    const Submit = (value, { resetForm }) => {

        if (value.search.trim()) {
            onSearch(value);
            resetForm();
            return;
        }
    }



    return (
        <Header >
            <Formic
                onSubmit={Submit}
                initialValues={{ search: '' }}
            >
                <SearchForm>

                    <SearchField name="search"
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />

                    <Button type="submit" >
                        <ImSearch />
                    </Button>
                </SearchForm>

            </Formic>

        </Header>

    )


}