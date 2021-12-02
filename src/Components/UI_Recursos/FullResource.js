import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';
import { DocumentResource } from './RecursosComponents/DocumentResource';
import { VideoResource } from './RecursosComponents/VideoResource';

export const FullResource = () => {
    const {resourceId} = useParams();
    const {resources} = useSelector(state => state.resource);

    const resource = resources.find((re) => re.rid === resourceId);

    return (
        <div>
            {
               (resource)?(
                    <>
                        {
                            (()=>{
                                switch (resource.tipo) {
                                    case "Video":
                                        return (<VideoResource {...resource} />)
                                    case "Documento":
                                        return (<DocumentResource {...resource} />)
                                    default:
                                        return (<VideoResource/>)
                                }
                            })
                            ()
                        }
                    </>
                ):(
                    <Redirect to = "/error404"/>
                )
            }
        </div>
    )
}
