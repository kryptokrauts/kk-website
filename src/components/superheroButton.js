import React from 'react';
import Helmet from 'react-helmet';

export default () => {
    const handleLoad = () => {
        window.superheroUtils.createButton('.superhero-icon', { size: 'icon', account: 'kryptokrauts.chain' });
        window.superheroUtils.createButton('.superhero-small', { size: 'small', account: 'kryptokrauts.chain' });
        window.superheroUtils.createButton('.superhero-medium', { size: 'medium', account: 'kryptokrauts.chain' });
        window.superheroUtils.createButton('.superhero-large', { size: 'large', account: 'kryptokrauts.chain' });
    }
    const handleChangeClientState = (newState, addedTags) => {
        if (addedTags && addedTags.scriptTags) {
            const scriptTag = addedTags.scriptTags[0];
            scriptTag.onload = handleLoad;
        }
    }
    return <>
        <Helmet
            script={[{ src: 'https://unpkg.com/@aeternity/superhero-utils@0.5.1/dist/index.js' }]}
            onChangeClientState={handleChangeClientState}
        />
    </>
}