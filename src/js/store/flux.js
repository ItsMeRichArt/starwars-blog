import { peopleActions, peopleStore } from './people';
import { planetsActions, planetsStore } from './planets';
import { speciesActions, speciesStore } from './species';
import { starshipsActions, starshipsStore } from './starships';
import { vehiclesActions, vehiclesStore } from './vehicles';
import { filmsStore, filmsActions} from './films';

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			...peopleStore,
			...planetsStore,
			...speciesStore,
			...starshipsStore,
			...vehiclesStore,
			...filmsStore
		},
		actions: {
			...peopleActions(getStore, getActions, setStore),
			...planetsActions(getStore, getActions, setStore),
			...speciesActions(getStore, getActions, setStore),
			...starshipsActions(getStore, getActions, setStore),
			...vehiclesActions(getStore, getActions, setStore),
			...filmsActions(getStore, getActions, setStore)
		}
	};
};

export default getState;