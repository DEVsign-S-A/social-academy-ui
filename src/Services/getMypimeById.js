import {pyme} from '../data/DataPyme'

export const getMypimeById = (id) =>{
    return pyme.find( (pyme) => pyme.IdCompany === id );
}

