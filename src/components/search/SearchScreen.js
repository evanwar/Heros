import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { HeroCard } from '../heroes/HeroCard';
import useForm from '../hooks/useForm ';
import { getHeroesByName } from '../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`search?q=${searchText}`);


    }


    return (
        <>

            <div className="row">

                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>


                        <input type="text"
                            name="searchText"
                            placeholder="Find your hero"
                            className="form-control"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />

                        <br />

                        <button
                            type="submit"
                            className="btn  btn-outline-primary float-right">Search
                        </button>




                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />


                    {
                        heroesFilter.map(hero => (<HeroCard key={hero.id} {...hero} />))
                    }


                </div>

            </div>



        </>
    )
}
