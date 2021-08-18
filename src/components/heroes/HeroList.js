import React, { useMemo } from 'react'
import { getheroesByPublisher } from '../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getheroesByPublisher(publisher), [publisher]);

    return (
        <div>
            <div className="card-columns animate__animated animate__fadeI">
                {
                    heroes.map(heroe => {
                        return <HeroCard key={heroe.id} {...heroe} />
                    })
                }
            </div>
        </div>
    )
}
