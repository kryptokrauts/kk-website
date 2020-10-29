import React from "react";
import Helmet from "react-helmet";

export default () => {
    const handleLoad = () => {
        window.superheroButton('.superhero-icon', { size: 'icon', account: 'kryptokrauts.chain' });
        window.superheroButton('.superhero-small', { size: 'small', account: 'kryptokrauts.chain' });
        window.superheroButton('.superhero-medium', { size: 'medium', account: 'kryptokrauts.chain' });
        window.superheroButton('.superhero-large', { size: 'large', account: 'kryptokrauts.chain' });
    }
    const handleChangeClientState = (newState, addedTags) => {
        if (addedTags && addedTags.scriptTags) {
            const scriptTag = addedTags.scriptTags[0];
            scriptTag.onload = handleLoad;
        }
    }
    return <>
        <Helmet
            script={[{ src: 'https://unpkg.com/@aeternity/superhero-utils/dist/index.js' }]}
            onChangeClientState={handleChangeClientState}
        />
    </>
}