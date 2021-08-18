import { heroes } from "../../data/heroes";

export const getHeroesbyId = (Id) => {
    return heroes.find(hero => hero.id === Id);
}